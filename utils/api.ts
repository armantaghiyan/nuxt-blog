import {type Post} from "~/utils/models";

export type PostListRes = { // /post
    posts: Post[],
}

export type PostRes = { // post/:username/:slug
    post: Post,
}
