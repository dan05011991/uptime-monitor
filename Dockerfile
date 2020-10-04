FROM node:13

COPY . /usr/webapp
WORKDIR /usr/webapp

RUN npm install
RUN npm test
RUN npm run-script build

FROM nginx:alpine

COPY conf/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=0 /usr/webapp/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
