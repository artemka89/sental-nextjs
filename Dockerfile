FROM node:20.18.0-alpine
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build
EXPOSE 8000
CMD ["npm", "run" , "start"]