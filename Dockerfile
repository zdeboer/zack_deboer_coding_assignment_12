FROM node:20-alpine AS build

WORKDIR /deboer_zack_ui_garden_build_checks

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:20-alpine

WORKDIR /deboer_zack_ui_garden_build_checks
RUN npm install -g serve

COPY --from=build /deboer_zack_ui_garden_build_checks/build ./build

EXPOSE 8018
CMD ["serve", "-s", "build", "-l", "8018"]