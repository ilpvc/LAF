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
    password?: string;
    realName?: string;
    age?: number;
    clazz?: string;
    phoneNumber?: string;
    gender?: number;
    email?: string;
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
    image?: string;
    count?: number;
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
    integral?: number;
    createdTime?: string;
    updatedTime?: string;
}

export interface PostQuery {
    type?: number;
    title?: string;
    content?: string;
    userId?: number;
    createdTime?: string;
    updatedTime?: string;
    status?: number;
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
    emailCode?: string;
}
