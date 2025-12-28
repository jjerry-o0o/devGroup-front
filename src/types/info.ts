export interface RepositoryInfoDto {
    info: RepositoryInfo[];
}

export interface RepositoryInfo {
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

export interface RepositoryDetailInfo {
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

export interface CategoryInfo {
    id: number;
    categoryCode: string;
    krName: string;
    enName: string;
    // description: string;
    // sortOrder: number;
    // useYn: boolean;
    // deleted: boolean;
}

export interface TagInfo {
    id: number;
    tagName: string;
    searchCount: number;
    infoId: number;
    className: string;
}

export interface supportInfo {

}