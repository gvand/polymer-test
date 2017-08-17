FROM        node:7.2.0

MAINTAINER  Gerbrand van Dantzig <gerbrand.van.dantzig@gmail.com>

RUN         apt-get update \
            && apt-get install -y --no-install-recommends git \
            && apt-get clean \
            && useradd --user-group --create-home --shell /bin/false app

ENV         HOME=/home/app

COPY        package.json $HOME/test/
RUN         chown -R app:app $HOME/*

USER        app
WORKDIR     $HOME/test
RUN         npm i

EXPOSE      8080

CMD         bash