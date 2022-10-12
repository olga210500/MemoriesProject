interface Post {
    _id?:string,
    title: string,
    message: string,
    creator: string,
    tags: string[] | string,
    selectedFile?: string,
    createdAt?: Date
}

export type {Post}