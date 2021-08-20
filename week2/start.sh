#!/bin/bash

if [ $# -eq 0 ]; then
    echo "Please input the process."
    echo "usage) start <process>"
    exit 0
fi

for i in $@; do
    if [ "$i" == "nginx" ]; then
        echo `systemctl start nginx`
        echo "nginx is started."
    elif [ "$i" = "mysql" ]; then
        echo `systemctl start mysqld`
        echo "mysqld is started."
    fi
done
