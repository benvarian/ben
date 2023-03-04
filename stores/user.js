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
            // console.log(element);
            // const url = element.contents_url.replace(
            //   /\/{\+path}/,
            //   "/README.md"
            // );
            // const readMe = await fetch(url)
            //   .then((response) => response.json())
            //   .then((data) => {
            //     return decodeURIComponent(atob(data.content));
            //   });
            const languages = await fetch(element.languages_url)
              .then((response) => response.json())
              .then((data) => {
                return data
              });
            const data = {
              id: element.id,
              name: element.name,
              url: element.html_url,
              languages: languages,
              // readme: readMe.slice(0,50),
            };
            this.repos.push(data);
          });
        });
    },
  },
});
