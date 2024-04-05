FROM ruby:3.1.1-alpine3.15 as builder

RUN apk add --no-cache build-base nodejs-current

WORKDIR /srv/jekyll

COPY . .

RUN bundle install
RUN jekyll build

FROM nginx:alpine

COPY --from=builder /srv/jekyll/_site /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 4000

