FROM        node:7.2.0

MAINTAINER  Gerbrand van Dantzig

RUN         apt-get update \
            && apt-get -y install libpng12-0 \
            && useradd --user-group --create-home --shell /bin/false app \
            && npm i -g polymer-cli \
            && npm i -g yarn \
            && npm i -g bower \
            && mkdir -p /var/log/pm2

ENV         HOME=/home/app

COPY        package.json yarn.lock $HOME/test/
RUN         chown -R app:app $HOME/*

USER        app
WORKDIR     $HOME/test
RUN         yarn install

EXPOSE      8080

CMD         ["npm", "start"]