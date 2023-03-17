import { store } from '@redux/store';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
    const persistor = persistStore(store);
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Suspense fallback={<div>Loading...</div>}>
                    <RouterProvider router={routes} />
                    <ToastContainer />
                </Suspense>
            </PersistGate>
        </Provider>
    );
}

export default App;
