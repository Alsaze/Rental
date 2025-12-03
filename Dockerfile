FROM node:24-alpine AS build
WORKDIR /app
RUN corepack enable
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

FROM node:24-alpine
WORKDIR /app
COPY --from=build /app/.output/ ./

ENV PORT=80
ENV VITE_BASE_URL=https://rental.koptilnya.xyz
ENV VITE_YANDEX_MAPS_KEY=13f4c06b-cb7e-4eeb-81f1-af52f12587b2

EXPOSE 80

CMD ["node", "/app/server/index.mjs"]
