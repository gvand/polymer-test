FROM        node:7.2.0

MAINTAINER  Gerbrand van Dantzig <gerbrand.van.dantzig@gmail.com>

#ENV         HOME /home/polymer
#ARG         user=polymer
#ARG         group=polymer

RUN         apt-get update \
            && apt-get install -y --no-install-recommends git \
            && apt-get clean \
#            && useradd -d "$HOME" -U -m -s /bin/bash ${user} \
            && useradd --user-group --create-home --shell /bin/false app \
            && npm i -g gulp bower polymer-cli --unsafe-perm \
            && npm i -g generator-polymer-init-custom-build \
            && npm i -g browser-sync

ENV         HOME=/home/app

COPY        package.json $HOME/test/
RUN         chown -R app:app $HOME/*

USER        app
WORKDIR     $HOME/test
RUN         npm i

EXPOSE      8081

CMD         bash

#CMD         ["npm", "start"]

#RUN         mkdir -p /home/${user}/app
#COPY        package.json /home/${user}/app/
#RUN         chown -R ${user}:${group} $HOME/*
#
#USER        ${user}
#
##VOLUME      /home/${user}/app
#WORKDIR     /home/${user}/app
#
#RUN         npm i
#
#EXPOSE      8081
#
#CMD         bash