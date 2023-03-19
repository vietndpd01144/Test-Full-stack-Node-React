import { AddBodyRecordDataForm } from '@redux/slices/bodyRecordSlice/interfaces';
import axiosClient from '@config/axios/axios.config';
import { StatisticalBodyRecordResponse } from './interfaces/statistical-body-record.interface';

export const statisticalRecord = (type: 'DAY' | 'WEEK' | 'MONTH' | 'YEAR') => {
    return new Promise<StatisticalBodyRecordResponse>(async (resolve, reject) => {
        try {
            const result = await axiosClient.get('/body-record/statistical', { params: { type } });
            resolve(result as unknown as StatisticalBodyRecordResponse);
        } catch (error) {
            reject(error);
        }
    });
};

export const addRecord = (data: AddBodyRecordDataForm) => {
    return new Promise<any>(async (resolve, reject) => {
        try {
            const result = await axiosClient.post('/body-record', {
                weight: data.weight,
                fat_percentage: data.fatPercentage
            });
            resolve(result);
        } catch (error) {
            reject(error);
        }
    });
};
