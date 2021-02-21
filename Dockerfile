FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
COPY .env ./

RUN yarn

# Bundle app source
COPY . .

RUN yarn build

EXPOSE 3333

CMD [ "node", "dist/shared/infra/http/server.js" ]
