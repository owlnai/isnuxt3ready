# Is Nuxt 3 ready?
Your best up-to-date guide for the compatibility for Nuxt 3 modules. Built using Nuxt 3 and WindiCSS. Based on the initial work by @pi0 and inspired by [_Is Apple Silicon ready?_](https://isapplesiliconready.com)

## API access
_Is Nuxt 3 Ready_ offers a free API for developers and repo maintainers. Note that this assumes good faith and, in the event of being misused, it might be shutdown or restricted.
- `/api/modules` Gets an array of objects listing every module
- `/api/modules/:module` (e.g /api/modules/@nuxt-image): Gets an object listing the specified module
## Status guide
- `ready` ✅ Tested and working
- `pending` 🚧 Work in progress or planned
- `unknown` ❓ To be tested
- `bugged` ❗ Reported issues
- `unsupported` ❌ Won't be supported
## Updating data
Data is located at `./modules.json`. Please, make sure the JSON is valid before comitting.
