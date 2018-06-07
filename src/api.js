export function getHosts(context, ip, port) {
    return context.$http.get(global.zabbixUrl + '/get_host', {params: {
        ip: ip,
        port: port
    }})
}

export function getItemsData(context, ip, port, hostid, key, timeFrom, timeTill) {
    return context.$http.get(global.zabbixUrl + '/get_monitordata', {params: {
        ip: ip,
        port: port,
        hostid: hostid,
        key: key,
        time_from: timeFrom,
        time_till: timeTill
    }})
}

export function getCluster(context) {
    return context.$http.get(global.zabbixUrl + '/get_cluster')
}

export function getTemplates(context, ip ,port) {
    return context.$http.get(global.zabbixUrl + '/get_template', {params: {
        ip: ip,
        port: port
    }})
}

export function getGroups(context, ip ,port) {
    return context.$http.get(global.zabbixUrl + '/get_group', {params: {
        ip: ip,
        port: port
    }})
}

export function getClusters(context) {
    return context.$http.get(global.zabbixUrl + '/get_cluster')
}