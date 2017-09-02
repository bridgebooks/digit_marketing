#! /usr/bin/env bash

digit@13.82.105.192 <<EOF
    cd /var/www/digit-marketing

    pm2 kill

    rm -rf node_modules/

    bower install

    yarn install

    yarn start
EOF
