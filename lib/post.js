import axios from "axios";

export const getPosts = async () => {
    try {
       const resp = await  axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
        return resp.data
    }catch(e){
        console.log('Get post err: ', e)
    }
}