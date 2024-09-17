# vite-remix-1

## Local development server

```sh
npm run dev
```

## Local container server

```sh
docker compose build
docker compose up -d
```

## Deploy to Azure Container Apps

```sh
azd auth login
azd env new foo-env
azd env set MS_TENANT_ID XXXXXXXX
azd env set MS_CLIENT_ID XXXXXXXX
azd env set MS_CLIENT_SECRET XXXXXXXX
azd provision
azd deploy
```
