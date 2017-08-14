FROM        node:7.2.0

MAINTAINER  Gerbrand van Dantzig <gerbrand.van.dantzig@gmail.com>

ENV         HOME /home/polymer
ARG         user=polymer
ARG         group=polymer

RUN         useradd -d "$HOME" -U -m -s /bin/bash ${user}

RUN         apt-get update && \
            apt-get install -y --no-install-recommends git && \
            apt-get clean && \
            npm i -g gulp bower polymer-cli --unsafe-perm
RUN         npm i -g generator-polymer-init-custom-build && \
            npm i -g browser-sync

USER        ${user}

EXPOSE      8081

RUN         mkdir -p /home/${user}/app

VOLUME      /home/${user}/app

WORKDIR     /home/${user}/app

CMD         bash