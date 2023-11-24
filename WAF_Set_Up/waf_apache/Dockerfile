FROM ubuntu:20.04
RUN apt update && apt install -y  software-properties-common vim nano curl telnet git

RUN apt update 

RUN apt install -y apache2

RUN apt install libapache2-mod-security2 -y

RUN a2enmod headers

ENTRYPOINT tail -f /var/log/apache2/error.log