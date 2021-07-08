FROM node:14

LABEL vendor=Arte \
  com.arte.maintainer="Rafael Soriano <rafael.soriano@arteenarte.com>" \
  com.arte.product="True Home Frontend" \
  version="1.0" \
  description="True Home Frontend"

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install --no-optional
COPY . .

ARG PUBLIC_API_URL
ENV SNOWPACK_PUBLIC_API_URL=${PUBLIC_API_URL}



EXPOSE 8080
RUN npm run build
CMD npm start
