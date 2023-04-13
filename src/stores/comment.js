import { defineStore } from "pinia";
import { usePostStore } from "./post";

export const useCommentStore = defineStore({
    id: 'comment',
    state: () => ({ 
        comments: [],    
    }),
    getters: {
        getPostComments: () => {
            const postStore = usePostStore();
            return () => state.comments.filter((post) => post.postId === postStore.post.id )
        },
    },
    actions: {
        async fetchComments() {
            try {
                this.comments = await fetch(`https://jsonplaceholder.typicode.com/comments`).then((res) => res.json() );
            } catch (err) {
                console.log(err);
            }
        }
    },
})