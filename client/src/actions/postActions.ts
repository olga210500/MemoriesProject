import { URL } from "../constants/constants";
import { Post } from "../models/models";

const addNewPost = (post: Post) => {
    const params = {
        body: JSON.stringify(post),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    }
    fetch(URL + 'posts', params)
        .then((res) => {
            console.log(res);
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
        })
        .catch(err => {
            console.log(err);
        })

}

const deletePost = (id: string) => {
    console.log(id);
    
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
const getAllPosts=()=>{
    const params = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    }
    fetch(URL + `posts`, params)
    .then(data => data.json())
    .then((resp) => {
        console.log(resp);
        
        localStorage.setItem("posts",JSON.stringify(resp));

        
    })
    .catch(err => {
        console.log(err);

    })
}
export {addNewPost, updtateCurrentPost, deletePost, getAllPosts}