## Monorepo with Yarn Workspaces + Lerna
#### packages
- sample-package
- api-server

## API-Server
[Link](./packages/api-server/README.md)


## Yarn CLI

### Install dependencies
```
$ nvm use
...
$ yarn install
```

### Build
```bash
$ yarn build
```
### Run

```bash
// for api-server
$ yarn start:server
```

### Add npm packages
ex) for api-server
```bash
$ yarn workspace @project/api-server add <npmPackageName>
```

### Workspaces info

```
$ yarn workspaces info
```

