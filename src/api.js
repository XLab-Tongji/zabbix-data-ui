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
        timeFrom: timeFrom,
        timeTill: timeTill
    }})
}