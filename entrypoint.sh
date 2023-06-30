#!/bin/bash
# set -o errexit -o nounset -o pipefail

[ "${DEBUG:-false}" == true ] && set -x

initialize_system() {
  echo "Initializing Conzept container ..."

  # PHP_MAX_CHILDREN=${PHP_MAX_CHILDREN:-5}
  # echo "updating PHP_MAX_CHILDREN variable to: ${PHP_MAX_CHILDREN}"
  # # # configure conf files
  # sed 's,{{PHP_MAX_CHILDREN}},'"${PHP_MAX_CHILDREN}"',g' -i /etc/php7/php-fpm.d/www.conf

}

start_system() {
  initialize_system
  echo "Starting Conzept! ..."
  chmod +x /var/www/html/settings.conf
  . /var/www/html/settings.conf
  /usr/bin/supervisord -n -c /etc/supervisor/supervisord.conf
}

start_system

exit 0
