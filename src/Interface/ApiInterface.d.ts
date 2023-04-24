/* eslint-disable */

// @ts-nocheck

/**
 * generated by free-swagger
 * @see https://www.npmjs.com/package/free-swagger
 * @title 校园失误招领系统 API
 * @description SpringDoc API 演示
 * @host http://localhost:8080/api-docs
 * @version v1.0.0
 * @date 2023-03-24 10:08
 **/

export interface User {
    id?: number;
    header?: string;
    nickname?: string;
    realName?: string;
    age?: number;
    clazz?: string;
    phoneNumber?: string;
    gender?: number;
    email?: string;
    qq?: string;
    otherContacts?: string;
    findNum?: number;
    lostNum?: number;
    isDeleted?: boolean;
    status?: number;
    integral?: number;
    createdTime?: string;
    updatedTime?: string;
}

export interface R {
    code?: number;
    success?: boolean;
    message?: string;
    data?: Record<string | number | symbol, any>;
}

export interface UserSettings {
    userId?: number;
    pushNotification?: boolean;
    followMe?: boolean;
    reportNotification?: boolean;
    followOthers?: boolean;
    replyNotification?: boolean;
    bookmarkNotification?: boolean;
}

export interface UserRole {
    id?: number;
    userId?: number;
    roleId?: number;
    createdTime?: string;
    updatedTime?: string;
}

export interface Tasks {
    taskId?: number;
    taskName?: string;
    points?: number;
    description?: string;
    createTime?: string;
    updateTime?: string;
}

export interface TaskUsers {
    taskUserId?: number;
    taskId?: number;
    userId?: number;
    createTime?: string;
    updateTime?: string;
}

export interface Roles {
    id?: number;
    name?: string;
    description?: string;
    createdTime?: string;
    updateTime?: string;
    isDeleted?: boolean;
    createdBy?: number;
    updatedBy?: number;
}

export interface RolePermission {
    id?: number;
    roleId?: number;
    permissionId?: number;
    createdTime?: string;
    updatedTime?: string;
}

export interface Post {
    id?: number;
    type?: number;
    title?: string;
    content?: string;
    image?: string | "";
    count: number | 0;
    userId?: number;
    createdTime?: string;
    updatedTime?: string;
    isDeleted?: boolean;
    status?: number;
    backUserId?: number;
}

export interface Permissions {
    id?: number;
    name?: string;
    description?: string;
    createdTime?: string;
    updatedTime?: string;
    isDeleted?: boolean;
}

export interface Likes {
    id?: number;
    userId?: number;
    postId?: number;
    createdTime?: string;
    updatedTime?: string;
}

export interface Follow {
    id?: number;
    followerId?: number;
    followingId?: number;
    createdTime?: string;
    updatedTime?: string;
}

export interface Comments {
    id?: number;
    postId?: number;
    commenterId?: number;
    commentedUserId?: number;
    content?: string;
    createdTime?: string;
    updatedTime?: string;
    deletedTime?: string;
    commentType?: number;
    parentId?: number;
    childComment?:Comments[];
    userName?:string;
    userHeader?:string;
    userName2?:string;
}

export interface UserQuery {
    nickname?: string;
    realName?: string;
    age?: number;
    clazz?: string;
    password?: string;
    phoneNumber?: string;
    gender?: number;
    email?: string;
    emailCode?: string
    findNum?: number;
    lostNum?: number;
    status?: number;
    userIds?: number[];
    integral?: number;
    createdTime?: string;
    updatedTime?: string;
}

export interface PostQuery {
    type?: number;
    title?: string;
    content?: string;
    userId?: number;
    searchInfo?: string;
    createdTime?: string;
    updatedTime?: string;
    status?: number[];
    collection?: number[];
    collectionUserId?: number[];

}

export interface CommentsQuery {
    postId?: number;
    commenterId?: number;
    commentedUserId?: number;
    content?: string;
    commentType?: number;
    parentId?: number;
}

export interface R {
    code?: number;
    success?: boolean;
    message?: string;
    data?: Record<string | number | symbol, any>;
}


export interface AttributeQuery {
    attrKey?: string;
    numberValue?: string;
    textValue?: string;
}


export interface LoginParams {
    nickName?: string;
    password?: string;
    email?: string;
    code?: string;
}

export interface Res {
    code?: number;
    data?: object;
    message?: string;
    success?: boolean;
}


export interface CollectionQuery {
    userId?: number;
    postId?: number;
}

export interface Collection {
    id?: number;
    userId?: number;
    postId?: number;
}

export interface AttentionQuery {
    attentionUserId?: number;
    attentionedUserId?: number;
}

export interface Attention {
    id?: number;
    attentionUserId?: number;
    attentionedUserId?: number;
}


export interface ReportQuery {
    userId?: number;
    postId?: number;
    content?: string;
    status?: number;
}

export interface Report {
    id?: number;
    userId?: number;
    postId?: number;
    content?: string;
    status?: number;
    updatedTime?: string;
    deletedTime?: string;
}

export interface LikesQuery {
    userId?: number;
    postId?: number;
}

export interface UserSecurity {
    id?: number;
    userId?: number;
    nickname: string;
    originPassword: string;
    password: string;
    rePassword: string;
    email: string;
}

export interface UserSecurityQuery {
    userId?: number;
    nickname?: string;
    originPassword?: string;
    password?: string;
    email?: string;
}

export interface R {
    code?: number;
    success?: boolean;
    message?: string;
    data?: Record<string | number | symbol, any>;
}

export interface Mail {
    userEmail?:string
}

