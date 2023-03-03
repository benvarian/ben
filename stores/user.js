import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state() {
    return {
      repos: [],
    };
  },
  getters: {},
  actions: {
    async getRepos() {
      await fetch("https://api.github.com/users/benvarian/repos")
        .then((response) => response.json())
        .then((data) => {
          data.forEach(async (element) => {
            const url = element.contents_url.replace(
              /\/{\+path}/,
              "/README.md"
            );
            console.log(url);
            const readMe = await fetch(url)
              .then((response) => response.json())
              .then((data) => {
                return decodeURIComponent(atob(data.content));
              });
            const data = {
              id: element.id,
              name: element.name,
              url: element.html_url,
              readme: readMe,
            };
            this.repos.push(data);
          });
        });
    },
  },
});
