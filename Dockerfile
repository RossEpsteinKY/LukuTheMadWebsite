FROM node:latest as node

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node /app/dist/LukuSiteAngular /usr/share/nginx/html

EXPOSE 4200

RUN npm start
