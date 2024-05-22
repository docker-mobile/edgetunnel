FROM node:slim

ENV NODE_ENV=production
ENV PORT=443

WORKDIR /app

COPY dist dist/

EXPOSE 4100

CMD [ "node", "./dist/apps/node-vless/main.js" ]
