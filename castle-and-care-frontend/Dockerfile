#parent image 
FROM node:21-alpine

#working directory
WORKDIR /castle-and-care-frontend

COPY package*.json ./

#copies from source to destination
COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
