#!/bin/bash

if [ $# -eq 0 ]; then
    echo "Please input the process."
    echo "usage) stop <process>"
    exit 0
fi

for i in $@; do
    if [ "$i" == "nginx" ]; then
        echo `systemctl stop nginx`
        echo "nginx is stopped."
    elif [ "$i" = "mysql" ]; then
        echo `systemctl stop mysqld`
        echo "mysqld is stopped."
    fi
done
