export enum PostStatus {
    Published = 'published',
    Unpublished = 'unpublished'
}

export type Topic = {
    id: number,
    title: string,
    slug: string,
}

export type User = {
    id: number,
    name: string,
    email: string,
    username: string,
    avatar: string,
    created_at: string,
    updated_at: string,
}

export type Tag = {
    id: number,
    title: string,
    slug: string,
}

export type Post = {
    id: number,
    user_id: number,
    topic_id: number,
    title: string,
    slug: string,
    thumbnail: string,
    content: string,
    status: PostStatus,
    created_at: string,
    updated_at: string,

    topic?: Topic,
    user?: User,
    tags?: Tag[],
}
