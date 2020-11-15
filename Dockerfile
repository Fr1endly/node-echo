FROM node

COPY src/server.js /src/server.js
VOLUME ./src /src

WORKDIR /src/server
ENV WEB_APP_PORT=8080


CMD node /src/server.js
