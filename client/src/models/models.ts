interface Post {
    title: string,
    message: string,
    creator: string,
    tags: Tags,
    selectedFile: string,
    createdAt?: Date
}
interface Tags {
 [index: number]: string;
}
export type {Post, Tags}