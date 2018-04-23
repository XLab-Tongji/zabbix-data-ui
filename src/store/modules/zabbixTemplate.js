import * as types from '../mutation-types'

const state = {
    zabbixTemplates: [
        {
            templateId: 1,
            name: "Linux Template",
            selected: false
        },
        {
            templateId: 2,
            name: "Window Template",
            selected: false
        },
        {
            templateId: 3,
            name: "Macos Template",
            selected: false
        }
    ]
}

const getters = {
    allTemplates: state => state.zabbixTemplates
}

const mutations = {
    [types.SET_TEMPLATE](state, { name }) {
        const template = state.zabbixTemplates.find(template => template.name === name)
        template.selected = !template.selected
    },
    [types.SET_ALL_TEMPLATE](state) {
        state.zabbixTemplates.forEach(element => {
            element.selected = !element.selected
        });
    },
    [types.RESET_TEMPLATE](state) {
        state.zabbixTemplates.forEach(element => {
            element.selected = false
        })
    }
}

// const actions = {
//     getZabbixTemplate({commit}) {
//         //TODO:调用接口获取templates

//         var templates = [
//             {
//                 templateId: 1,
//                 name: "Linux Template",
//                 selected: false
//             },
//             {
//                 templateId: 2,
//                 name: "Window Template",
//                 selected: false
//             },
//             {
//                 templateId: 3,
//                 name: "Macos Template",
//                 selected: false
//             }
//         ]
//         commit(types.RESET_TEMPLATE, { templates })
//     } 
// }

export default {
    state,
    mutations,
    getters,
}