FROM node:20-bookworm-slim AS base
ENV NODE_ENV production
RUN apt-get update && apt-get install -y openssl

FROM base AS deps
WORKDIR /myapp
ADD package.json ./
RUN npm install --include=dev

FROM base AS production-deps
WORKDIR /myapp
COPY --from=deps /myapp/node_modules /myapp/node_modules
ADD package.json ./
RUN npm prune --omit=dev

FROM base AS build
WORKDIR /myapp
COPY --from=deps /myapp/node_modules /myapp/node_modules
ADD . .
RUN npm run build

FROM base
WORKDIR /myapp
COPY --from=production-deps /myapp/node_modules /myapp/node_modules
COPY --from=build /myapp/build /myapp/build
COPY --from=build /myapp/public /myapp/public
ADD . .
CMD ["npm", "start"]
