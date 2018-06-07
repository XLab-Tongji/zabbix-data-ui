import * as types from '../mutation-types'

const state = {
    zabbixGroups: {}
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
        const group = state.zabbixGroups.groups.find(group => group.name === name)
        group.selected = !group.selected
    },
    [types.SET_ALL_GROUP](state) {
        state.zabbixGroups.groups.forEach(element => {
            element.selected = !element.selected
        });
    },
    [types.RESET_GROUP](state) {
        state.zabbixGroups.groups.forEach(element => {
            element.selected = false
        })
    },
    [types.INIT_GROUP](state, {groups}) {
        state.zabbixGroups = groups
    }
    
}

const actions = {
    getZabbixGroup({commit}, groups) {
        commit(types.INIT_GROUP, {groups: groups})
    }
}

export default {
    state,
    mutations,
    getters,
    actions
}