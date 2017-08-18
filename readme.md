# Polymer POC Environment

#### This is an basic containerized development setup consisting of:
- [Traefik](https://traefik.io/) (Modern HTTP reverse proxy)
- [Node.js](http://nodejs.org/) (Javascript runtime)
- [ExpressJS](http://expressjs.com/) (Server-side Node.js framework)
- [Helmet](https://github.com/helmetjs/helmet) (help secure Express/Connect apps with various HTTP headers)
- [Polymer](https://www.polymer-project.org/) (Unlock the Power of Web Components)
- [Redux](http://redux.js.org/) (Predictable state container for JavaScript apps)
- [Redux-Saga](https://yelouafi.github.io/redux-saga/index.html) (An alternative side effect model for Redux apps)
- [Docker](https://yelouafi.github.io/redux-saga/index.html) (An alternative side effect model for Redux apps)

#### The setup is currently divided into 4 servers:

One Traefik Reverse Proxy and three Node.js servers for:
- hosting polymer test pages
- serving the bower_components
- providing a simple rest api


## Setting up the development environment:

The following steps are written with a MAC in mind so if this doesn't work on your machine, feel free to extend the readme with some steps for setting it up on a different environment.

- Install docker:
	- Go to: [docker.com](https://www.docker.com/docker-mac)
	- Download the installer and run it
- Check if git is installed:
	- `$> git --version`
	- if not install: [git](http://git-scm.com/downloads)


## Starting the project:

- Clone the repository: `$> git clone https://github.com/gvand/polymer-test.git`
- Change to the project root directory: `$> cd polymer-test`
- Run the project with docker: `$> docker-compose up`
- open [http://docker.localhost/](http://docker.localhost/)