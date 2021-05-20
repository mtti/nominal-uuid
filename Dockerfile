FROM node:16.2.0-stretch

ENV RUN_DIR /app
WORKDIR $RUN_DIR

COPY package.json .
RUN npm install
COPY . .

CMD ["npm", "start"]
