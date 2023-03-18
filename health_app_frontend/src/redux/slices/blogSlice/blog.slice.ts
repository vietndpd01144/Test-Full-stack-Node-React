import { RootState } from './../../store';
import { fetchBlog } from './../../../api/blog/blocApi';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Status } from './../../../config/enum/status';
import { Blog } from './../../../api/blog/interfaces/blog.interface';
interface BlogState {
    blogs: Blog[];
    fetchBlogStatus: Status;
    loadMoreStatus: Status;
    totalCount: number;
    limit: number;
    page: number;
}

const initialState: BlogState = {
    blogs: [],
    fetchBlogStatus: Status.INITIAL,
    loadMoreStatus: Status.INITIAL,
    totalCount: 0,
    limit: 8,
    page: 1
};

export const fetchBlogAction = createAsyncThunk('blog/fetch-blogs', (payload, { rejectWithValue }) => {
    try {
        return fetchBlog({});
    } catch (error) {
        rejectWithValue(error);
    }
});

export const loadMoreBlogAction = createAsyncThunk('blog/loadMore-blogs', (payload, { rejectWithValue, getState }) => {
    try {
        const { blog } = getState() as RootState;
        return fetchBlog({ page: blog.page + 1 });
    } catch (error) {
        rejectWithValue(error);
    }
});

const blogSlice = createSlice({
    name: 'blog',
    reducers: {},
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchBlogAction.pending, (state) => {
            state.fetchBlogStatus = Status.LOADING;
        });
        builder.addCase(fetchBlogAction.fulfilled, (state, { payload }) => {
            state.fetchBlogStatus = Status.SUCCESS;
            state.blogs = payload?.data.blogs as Blog[];
            state.totalCount = payload?.data.totalRecord ?? 0;
            state.page = 1;
        });
        builder.addCase(fetchBlogAction.rejected, (state) => {
            state.fetchBlogStatus = Status.FAILED;
        });

        builder.addCase(loadMoreBlogAction.pending, (state) => {
            state.loadMoreStatus = Status.LOADING;
        });
        builder.addCase(loadMoreBlogAction.fulfilled, (state, { payload }) => {
            state.loadMoreStatus = Status.SUCCESS;
            state.blogs = [...state.blogs, ...(payload?.data.blogs as Blog[])];
            state.page = state.page + 1;
        });
        builder.addCase(loadMoreBlogAction.rejected, (state) => {
            state.loadMoreStatus = Status.FAILED;
        });
    }
});

export const blogReducer = blogSlice.reducer;
