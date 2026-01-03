# ---------- Build stage ----------
FROM node:20-alpine AS build
WORKDIR /app
RUN corepack enable
COPY package.json yarn.lock ./
RUN yarn install --immutable
COPY tsconfig.json ./
COPY src ./src
RUN yarn build

# ---------- Runtime stage ----------
FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY package.json ./
COPY --from=build /app/dist ./dist
RUN npm install --omit=dev
EXPOSE 3000
CMD ["node", "dist/index.mjs"]