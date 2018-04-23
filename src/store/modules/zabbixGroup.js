import * as types from '../mutation-types'

const state = {
    zabbixGroups: [
        {
            groupId: 1,
            name: "Linux servers",
            selected: false
        },
        {
            groupId: 2,
            name: "Zabbix servers",
            selected: false
        },
        {
            groupId: 3,
            name: "Zabbix agents",
            selected: false
        }
    ]
}

const getters = {
    selectedTemplates: state => {
        var selection = []
        state.zabbixGroups.forEach(element => {
            if(element.selected) {
                selection.push(element)
            }
        });
        return selection
    }
}

const mutations = {
    [types.SET_GROUP](state, { name }) {
        const group = state.zabbixGroups.find(group => group.name === name)
        group.selected = !group.selected
    },
    [types.SET_ALL_GROUP](state) {
        state.zabbixGroups.forEach(element => {
            element.selected = !element.selected
        });
    },
    [types.RESET_GROUP](state) {
        state.zabbixGroups.forEach(element => {
            element.selected = false
        })
    }
}

const actions = {}

export default {
    state,
    mutations,
    getters,
    actions
}