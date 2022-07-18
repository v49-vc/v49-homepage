# V49

This repository holds the [Svelte Kit](https://kit.svelte.dev) code
that compiles to [v49.vc](https://v49.vc).

## GitPod

[GitPod](https://www.gitpod.io) is the preferred way to get up and running.

Just open this repository in GitPod, and you'll be good to go:

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/prgm-dev/v49-homepage)

**You do not need to do anything else as GitPod will install all dependencies and start the Dev server for you.**

If you want to work locally, read on.

## Installing

This repository uses [pnpm](https://pnpm.io) to manage its dependencies
(install instructions can be found [here](https://pnpm.io/installation)):

```bash
pnpm install
```

If you do not have `postinstall` scripts enabled, you also need to
manually run its actions:

```bash
# Generate the `.svelte-kit/` folder, required for TypeScript to work
pnpm svelte-kit sync
```

## Develop locally

To start the development server with an API proxy to the pre-production environment:

```bash
pnpm dev
```

## Building

To build the production version:

```bash
pnpm build
```

You can then preview the production version in a browser:

```bash
pnpm preview
```
