# nx-trials

Experiments using [Nx](https://nx.dev)

- Installed NX Cloud App on Github
- Slide deck - for OttawaJS?
- [DarkMode in css](https://dev.to/ruppysuppy/dark-mode-using-css-variables-1m3)
- Extract a component into a library
- Styling options Sass, Chakra/emotion
- UI
  - [Navbar in Chakra](https://raptis.wtf/blog/create-a-navbar-with-chakra-ui-react/)
  - [Chakra-ui & React Table](https://chakra-ui.com/guides/integrations/with-react-table)
  - [Responsive table column hiding](https://phppot.com/css/automatic-column-hiding-using-css-in-responsive-table/)
  - [Photo Galler in Chakra-ui](https://blog.logrocket.com/building-photo-gallery-app-from-scratch-chakra-ui/)
    - in Chakra-ui
- Nx Cloud / CI/ CD
  - run e2e as part of CI
  - make it work with pull requests
- Deploy to vercel
- Deploy to netlify
  - <https://github.com/nrwl/nx-examples/blob/master/tools/scripts/deploy.ts>
  - <https://rhnmht30.dev/blog/next-image-with-netlify>

## Usage

Let's keep the most used command pattern here:

### Development

```bash
# dev server for next-css app
nx serve next-css  # === nx run next-css:serve

# test,lint and e2e
nx run-many --target=test --all
nx run-many --target=lint --all
nx run-many --target=e2e --all

# local production build (export)
nx build next-css
nx serve next-css --prod  # === nx run next-css:serve:production

# local production build (export)
nx export next-css
serve -l 4600  dist/apps/next-css/exported/
```

### Scaffold/generate

```bash
# Generate UI lib
nx g @nrwl/react:lib ui

# Add a component
nx g @nrwl/react:component xyz --project ui
```

### Affected commands

```bash
# see what's been affected by changes
nx affected:dep-graph

# run tests for current changes
nx affected:lint
nx affected:test

# run e2e tests for current changes
nx affected:e2e
```

### Sitespeed

```bash
# serve the nx exported site: http://192.168.86.31:4600
# serve the nx prod server site: http://192.168.86.31:4200
# since running in docker point to local ip:192.168.86.31
docker run --rm -v "$(pwd):/sitespeed.io" sitespeedio/sitespeed.io:16.7.1 http://192.168.86.31:4600 --mobile
docker run --rm -v "$(pwd):/sitespeed.io" sitespeedio/sitespeed.io:16.7.1 --mobile http://192.168.86.31:4200 http://192.168.86.31:4200/image-demo
```

## Setup

```bash
npx create-nx-workspace
? Workspace name (e.g., org name)     nx-trials
? What to create in the new workspace next.js           [a workspace with a single Next.js application]
? Application name                    next-css
? Default stylesheet format           CSS
? Use Nx Cloud? (It's free and doesn't require registration.) Yes [Faster builds, run details, Github integration. Learn more at https://nx.app]
```

There are also many [community plugins](https://nx.dev/nx-community) you could add.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@nx-trials/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to <http://localhost:4200/>. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.
