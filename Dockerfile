FROM node:20.18.0-alpine
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . . 
COPY ./.env.development /app/.env
RUN npm run build
EXPOSE 8000
CMD ["npm", "run" , "start"]