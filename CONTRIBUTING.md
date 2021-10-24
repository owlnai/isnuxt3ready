Thanks for contributing to Is Nuxt 3 Ready. Before you get started, it is recommended that you have a basic understanding of JSON. Please, avoid trailing commas.

## Setting up the project
[Fork the project](https://docs.github.com/en/get-started/quickstart/fork-a-repo) and [create a new branch](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository). 

## Editing the file
All module definitions are located at the root of the folder, `modules.json`. `repoUrl` and `issueUrl` can be omitted. It's an array of objects, so add a new object at the end of the array and fill the following data:
```JSON
{
  "name": "module-name-in-npm",
  "bridge": "unknown/bugged/pending/ready",
  "core": "unknown/bugged/pending/ready",
  "maintainers": "@JohnDoe, - if none",
  "repoUrl": "github repo url (optional)",
  "issueUrl": "related github issue url (optional)",
}
```
Examples:
```JSON
{
  "name": "@nuxtjs/strapi",
  "bridge": "unknown",
  "core": "unknown",
  "maintainers": "@benjamincanac, @Atinux",
  "repoUrl": "https://github.com/nuxt-community/strapi-module",
  "issueUrl": "https://github.com/nuxt-community/strapi-module/issues/165"
}
```
```JSON
{
  "name": "@example/this-doesnt-exist",
  "bridge": "ready",
  "core": "bugged",
  "maintainers": "-",
}
```
## Publishing the changes
Commit your changes and push them to your remote fork if working locally. [Open a Pull Request](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) to this repository and we'll review it. Thanks again for your contributions! 
