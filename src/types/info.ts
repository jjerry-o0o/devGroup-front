export interface RepositoryInfoList {
    categoryEnName: string;
    clickCount: number;
    id: number;
    introduction: string;
    isPublic: boolean;
    likeCount: number;
    thumbnailPath: string;
    thumbnailWebLink: string;
    title: string;
    updatedAt: string;
}

export interface RepositoryInfo {
    id: number;
    title: string;
    isPublic: boolean;
    url: string;
    introduction: string;
    description: string;
    thumbnailPath: string;
    thumbnailWebLink: string;
    likeCount: string;
    clickCount: string;
    categoryId: number;
    createdAt: string;
    updatedAt: string;
    tagList: string;
}

