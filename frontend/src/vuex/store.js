import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

// import router from '../router'
// import http from './axios'

class Project {
  constructor (number, name) {
    this.id = Math.floor(Math.random() * 1000000)
    this.number = number
    this.name = name
  }
}

import {
  // NEW_PROJECT,
  // CREATE_PROJECT,
  // UPDATE_PROJECT,
  // DELETE_PROJECT,
  SAVE_PROJECT,
  CREATE_PLAN
} from './mutation-types'

const state = {
  edit: {
    user: null,
    project: null
  },
  depts: [
    { id: 0, name: '第一営業部' },
    { id: 1, name: '第二総務部' }
  ],
  groups: [
    { id: 0, name: '食品販売グループ', dept_id: 0 },
    { id: 1, name: '住宅販売グループ', dept_id: 0 },
    { id: 2, name: '人事管理グループ', dept_id: 1 }
  ],
  jobs: [
    { id: 0, name: '部長' },
    { id: 1, name: '課長' },
    { id: 2, name: 'チーフ' }
  ],
  teams: [
    { id: 0, name: 'AGS' }
  ],
  users: [
    { id: 0, number: 'a123456', name: '山田 太郎', dept_id: 0, group_id: 0 },
    { id: 1, number: 'b234567', name: '真田 次郎', dept_id: 0, group_id: 0, smonth: '201704' },
    { id: 2, number: 'c345678', name: '上杉 三郎', dept_id: 0, group_id: 1 },
    { id: 3, number: 'd456789', name: '武田 士郎', dept_id: 0, group_id: 1, emonth: '201702' },
    { id: 4, number: 'e567890', name: '織田 吾郎', dept_id: 1, group_id: 2 }
  ],
  projects: [
    new Project('201703011930-00-01', '食品衛生安全法に伴う社内ルール整備'),
    new Project('201703021730-00-02', 'インフルエンザ流行に伴う自宅待機命令'),
    new Project('201703031830-00-03', '三世代住宅の安全性検証実験'),
    new Project('201703111630-00-04', '介護休暇の制定に伴う補助金算定ツールの提供')
  ],
  plans: []
}

const getters = {
  edit: state => state.edit,
  depts: state => state.depts,
  groups: state => state.groups,
  jobs: state => state.jobs,
  teams: state => state.teams,
  users: state => state.users,
  projects: state => state.projects,
  plans: state => state.plans
}

const actions = {
  [SAVE_PROJECT] ({ commit }, project) {
    commit(SAVE_PROJECT, project)
  },

  [CREATE_PLAN] ({ commit }, plan) {
    commit(CREATE_PLAN, plan)
  }
}

const mutations = {
  [SAVE_PROJECT] (state, project) {
    state.projects.push(Object.assign({}, project))
  },

  [CREATE_PLAN] (state, plan) {
    state.plans.push(plan)
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
