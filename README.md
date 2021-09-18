# nx-trials

Experiments using [Nx](https://nx.dev)

## TODO

- `nx migrate latest` - byt using `yarn`
- Installed NX Cloud App on Github
- Slide deck - for OttawaJS?
- [DarkMode in css](https://dev.to/ruppysuppy/dark-mode-using-css-variables-1m3)
- Extract a component into a library
- Styling options Sass, Chakra/emotion
- UI
  - [Navbar in Chakra](https://raptis.wtf/blog/create-a-navbar-with-chakra-ui-react/)
  - [Chakra-ui & React Table](https://chakra-ui.com/guides/integrations/with-react-table)
  - [Responsive table column hiding](https://phppot.com/css/automatic-column-hiding-using-css-in-responsive-table/)
  - [Photo Gallery in Chakra-ui](https://blog.logrocket.com/building-photo-gallery-app-from-scratch-chakra-ui/)
    - in Chakra-ui
- Deploy to vercel
  - <https://nx.dev/latest/react/guides/nextjs#deploying-to-vercel>
  - <https://blog.nrwl.io/painlessly-build-and-deploy-next-js-apps-with-nx-225e2721da78>
- Deploy to netlify
  - <https://github.com/nrwl/nx-examples/blob/master/tools/scripts/deploy.ts>
  - <https://rhnmht30.dev/blog/next-image-with-netlify>

## Usage

Let's keep the most used command pattern here:

### Development

```bash
# dev server for next-css app
nx serve next-css  # === nx run next-css:serve
```

### Test

```bash
# lint, test and e2e
nx run-many --target=lint --all # --skip-nx-cache=true
nx run-many --target=test --all # --skip-nx-cache=true
nx run-many --target=e2e --all # --skip-nx-cache=true

nx generate @nrwl/next:component --name=test --project=next-css --no-interactive

# local production build (export?)
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
nx affected:test
nx affected:lint
# run e2e tests for current changes
nx affected:e2e
```

### Deploy to vercel

Works for a single app. And not yet from CI.
This also leaves the `.gitignore`d `.vercel/` directory at the root folder.

Just invoke `vercel`, or `vercel --prod` at root, and include this as the top-level npm script:

```json
 "vercel-build": "nx build next-css --outputPath=.",
```

It should be possible to zip and send the built `.next/` directory,
by using a `.vercelignore`:

```txt
!.next
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
