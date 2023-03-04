import { defineStore } from "pinia";

export const useReposStore = defineStore("repos", {
  state() {
    return {
      repos: [],
      repo: null,
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
                return data;
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
    async getRepo(repo) {
      const base = "https://api.github.com/repos/";
      const url = base + repo;
      const info = await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          return data;
        });
      const languages = await fetch(info.languages_url)
        .then((response) => response.json())
        .then((data) => {
          return data;
        });
      const commits = await fetch(info.contributors_url)
        .then((response) => response.json())
        .then((data) => {
          return data.filter((id) => id.login === "benvarian")[0];
        });
      const point = info.description.indexOf(".");
      const newString = info.description.substring(0, point + 1);

      const data = {
        id: info.id,
        description: newString,
        name: info.name,
        url: info.html_url,
        languages,
        commits: commits.contributions,
      };
      this.repo = data;
    },
  },
});
