import { defineStore } from 'pinia';
import { usePostStore } from './post';

export const useAuthorStore = defineStore({
  id: 'author',
  state: () => ({
    authors: [],
  }),
  getters: {
    getPostAuthor: (state) => state.authors.find((author) => author.id === usePostStore().post.userId),
  },
  actions: {
    async fetchAuthors() {
      this.authors = await fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
    }
  }
})
