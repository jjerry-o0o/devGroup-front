import axiosApi from '@/api/axiosInstans.ts'
import type {RepositoryInfoList, RepositoryInfo} from '@/types/info.ts';

export const getLimitRepositoryList = (count: number) => {
    return axiosApi.get<RepositoryInfoList[]>(`/info/limit/${count}`);
}

export const getRepositoryInfo = (id: number) => {
    return axiosApi.get<RepositoryInfo>(`/info/${id}`);
}

export const postLikeRepository = (id: number) => {
    return axiosApi.post<boolean>(`/info/like/${id}`);
}