#!/bin/bash

if [ $# -eq 0 ]; then
    echo "Please input the process."
    echo "usage) restart <process>"
    exit 0
fi

for i in $@; do
    if [ "$i" == "nginx" ]; then
        echo `systemctl restart nginx`
        echo "nginx is restarted."
    elif [ "$i" = "mysql" ]; then
        echo `systemctl restart mysqld`
        echo "mysqld is restarted."
    fi
done
