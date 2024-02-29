FROM node:20-alpine
WORKDIR /app
COPY package.json yarn.lock ./
CMD ["yarn"]
COPY . .
EXPOSE 3000
