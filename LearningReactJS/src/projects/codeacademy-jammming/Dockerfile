FROM node:16.15

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3500

CMD ["npm", "start"]