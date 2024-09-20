# Web App Remix Sample Project

## Introduction

Project template to develop the modern web apps running on Azure PaaS and Easy Auth.

## Local development app server

```sh
npm install
npm run dev -- --host 0.0.0.0

> dev
> remix vite:dev --host 0.0.0.0

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://10.0.1.98:5173/
  ➜  Network: http://172.18.0.1:5173/
  ➜  press h + enter to show help
```

Open one of URLs shown above to access the development app server.

## Local development Azure Easy Auth server

Using Docker Compose [compose.yml](compose.yml) and the Microsoft Azure App Service Middleware container,
you can locally develop the app with Azure Easy Auth (ME-ID).

```sh
# Create compose-middleware-env.yml from compose-middleware-env.yml.example
# Replace <AZURE_TENANT_ID> <AZURE_CLIENT_ID> <AZURE_CLIENT_SECRET> with values of the ME-ID app registration.
cp compose-middleware-env.yml.example compose-middleware-env.yml
vi compose-middleware-env.yml

# Start the middleware server
docker compose up -d

# See the middleware server logs
docker compose logs -f

# Stop the middleware server
docker compose down
```

Open `http://127.0.0.1:8080` to authenticate yourself with Azure Easy Auth (ME-ID).
Your authenticated requests will be redirected to `http://127.0.0.1:5173`.

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
