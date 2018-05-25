# zabbix-data-ui

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## Deploy Setup
```
docker rmi -f zabbix-data-ui

docker build -t zabbix-data-ui ./

docker save zabbix-data-ui > zabbix-data-ui.tar

rsync -axv --progress -e 'ssh -p 9000' zabbix-data-ui.tar root@lab205.jios.org:/root/

ssh -p 9000 root@lab205.jios.org 'docker rm -f zabbix-data-ui; 
    docker rmi -f zabbix-data-ui; 
    docker load < zabbix-data-ui.tar; 
    rm zabbix-data-ui.tar;
    docker run -d -p 8081:80 --name zabbix-data-ui zabbix-data-ui'

rm zabbix-data-ui.tar
```
See http://lab205.jios.org:12003
