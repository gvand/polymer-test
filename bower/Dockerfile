FROM        node:7.2.0

MAINTAINER  Gerbrand van Dantzig <gerbrand.van.dantzig@gmail.com>

RUN         apt-get update \
            && apt-get install -y --no-install-recommends git \
            && apt-get clean \
            && useradd --user-group --create-home --shell /bin/false app \
            && npm i -g bower \
            && npm i -g yarn

ENV         HOME=/home/app

COPY        package.json yarn.* $HOME/test/
RUN         chown -R app:app $HOME/*

USER        app
WORKDIR     $HOME/test
RUN         yarn install --ignore-engines

EXPOSE      8082

CMD         bash