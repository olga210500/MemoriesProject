import { URL } from "../constants/constants";
import { Post } from "../models/models";


const addNewPost = (post: Post) => {
    console.log(JSON.stringify(post));

    const params = {
        body: JSON.stringify(post),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    }
    fetch(URL + 'posts', params)
        .then(data => data.json())
        .then((res) => {
            const items = JSON.parse(localStorage.getItem('posts') || '[]');
            localStorage.setItem('posts', JSON.stringify([...items, res]));

            location.reload();

        })
        .catch(err => {
            console.log(err);
        })

}
const updtateCurrentPost = (id: string, post: Post) => {
    const params = {
        body: JSON.stringify(post),
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' }
    }
    fetch(URL + `posts/${id}`, params)
        .then((res) => {
            console.log(res);
            if (res) {
                const items = JSON.parse(localStorage.getItem('posts') || '[]');
                const indexOfObject = items.findIndex((el:Post)=>el._id===post._id);
                if(!post.selectedFile){
                    post.selectedFile=items[indexOfObject].selectedFile;
                }
                items[indexOfObject] = post;
               
                localStorage.setItem('posts', JSON.stringify([...items]));
                location.reload();
            }

        })
        .catch(err => {
            console.log(err);
        })

}

const deletePost = (id: string) => {

    const params = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }

    }
    fetch(URL + `posts/${id}`, params).then((res) => {
        console.log(res);

    }).catch(err => {
        console.log(err);

    })

}
const getAllPosts = () => {
    const params = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    }
    fetch(URL + `posts`, params)
        .then(data => data.json())
        .then((resp) => {

            localStorage.setItem("posts", JSON.stringify(resp || []));

            console.log(resp);


            return resp;


        })
        .catch(err => {
            console.log(err);

        })
}
export { addNewPost, updtateCurrentPost, deletePost, getAllPosts }