const Mock = require('mockjs')

const Random = Mock.Random

const hosts = function() {
    var hosts = []
    for(let i = 0; i < 10; i++) {
        let newHost = {
            hostid: Random.natural(10600, 11000),
            host: Random.word(),
            description: Random.sentence()
        }
        hosts.push(newHost)
    }

    return hosts
}

const items = function() {
    var items = []
    for(let i = 0; i < 80; i++) {
        let newItemData = {
            timeStamp: 1521035350 + 60 * i,
            value: 1052073984 + Random.integer(-500, 500)
        }
        items.push(newItemData)
    }

    return items
}

const templates = function() {
    var templates = []
    for(let i = 0; i < 10; i++) {
        let newTemplate = {
            templateid: Random.natural(10000, 10100),
            host: Random.word()
        }
        templates.push(newTemplate)
    }

    return templates
}

const groups = function() {
    var groups = []
    for(let i = 0; i < 10; i++) {
        let newGroup = {
            hostid: Random.natural(10100, 10200),
            host: Random.word()
        }
        groups.push(newTemplate)
    }

    return groups
}

Mock.mock('/api/hosts', 'get', hosts)
Mock.mock('/api/itemdata', 'get', items)
Mock.mock('/api/templates', 'get', templates)
Mock.mock('/api/groups', 'get', groups)