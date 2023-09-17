FROM node:latest as build
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm ci
COPY . ./
RUN npm run build

FROM node:alpine as prepare-prod
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --omit dev
COPY . ./

FROM node:alpine as deploy-node
WORKDIR /app
COPY --from=prepare-prod /app .
COPY --from=build /app/build ./build
EXPOSE 3000
CMD ["node","build"]
