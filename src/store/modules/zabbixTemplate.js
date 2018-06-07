import * as types from '../mutation-types'

const state = {
    zabbixTemplates: {}
        // {
        //     templateId: 1,
        //     name: "Linux Template",
        //     selected: false
        // },
        // {
        //     templateId: 2,
        //     name: "Window Template",
        //     selected: false
        // },
        // {
        //     templateId: 3,
        //     name: "Macos Template",
        //     selected: false
        // }
}

const getters = {
    allTemplates: state => state.zabbixTemplates
}

const mutations = {
    [types.SET_TEMPLATE](state, { name }) {
        const template = state.zabbixTemplates.templates.find(template => template.host === name)
        template.selected = !template.selected
        console.log(template)
    },
    [types.SET_ALL_TEMPLATE](state) {
        state.zabbixTemplates.templates.forEach(element => {
            element.selected = !element.selected
        });
    },
    [types.RESET_TEMPLATE](state) {
        state.zabbixTemplates.templates.forEach(element => {
            element.selected = false
        })
    },
    [types.INIT_TEMPLATE](state, {templates}) {
        state.zabbixTemplates = templates
    }
}

const actions = {
    getZabbixTemplate({commit}, templates) {
        //TODO:调用接口获取templates

        // var templates = [
        //     {
        //         templateId: 1,
        //         name: "Linux Template",
        //         selected: false
        //     },
        //     {
        //         templateId: 2,
        //         name: "Window Template",
        //         selected: false
        //     },
        //     {
        //         templateId: 3,
        //         name: "Macos Template",
        //         selected: false
        //     }
        // ]
        commit(types.INIT_TEMPLATE, { templates: templates })
    } 
}

export default {
    state,
    mutations,
    actions,
    getters,
}