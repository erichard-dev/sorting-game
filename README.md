# Welcome to my mini project

I start this project for fun as a side project. I find that it was a good playground to learn (drag-and-drop js API) and reinforce some basics (Asynchrone request, CLIENT-SERVER architecture, create Docker container).

Feel free to run my mini project !

## prerequisite :

* download Docker
* clone project

## start project in development mode :

* execute shell CMD './docker/build_dev.sh'
* execute shell CMD './run_dev.sh'
* open any web browser at 'http://0.0.0.0:5000'

## start project in production mode :

* execute shell CMD './docker/build_prod.sh'
* execute shell CMD './docker/run_prod.sh'
* open any web browser at 'http://0.0.0.0:5000'

You should now see my little application.
Have fun !

PS1 : Any comment about how to improve my code is more than welcome.

### PS2 : You could have trouble running docker cmd inside build and run scripts. If so run script with sudo (cf. https://docs.docker.com/engine/install/linux-postinstall/).