import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

// import router from '../router'
// import http from './axios'
<<<<<<< HEAD
import axios from 'axios'
=======

class Project {
  constructor (number, name) {
    this.id = Math.floor(Math.random() * 1000000)
    this.number = number
    this.name = name
  }
}
>>>>>>> d69fc255c2ed20c48a5e59b53ff0083adb7910a2

import {
  LOAD_DEPTS,
  LOAD_GROUPS,
  LOAD_TEAMS,
  LOAD_JOBS,
  LOAD_USERS,
  LOAD_PROJECTS,
  LOAD_PLANS,
  INIT_STORE,
  SAVE_PROJECT,
  CREATE_PLAN
} from './mutation-types'

const state = {
  edit: {
    user: null,
    project: null
<<<<<<< HEAD
  }
=======
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
>>>>>>> d69fc255c2ed20c48a5e59b53ff0083adb7910a2
}

const getters = {
  users: state => state.users,
  edit: state => state.edit,
  depts: state => state.depts,
  groups: state => state.groups,
  jobs: state => state.jobs,
  teams: state => state.teams,
  projects: state => state.projects,
  plans: state => state.plans,

  getDeptById: (state, getters) => (id) => {
    return getters.depts.find(depts => depts.id === id)
  },

  getGroupById: (state, getters) => (id) => {
    return getters.groups.find(groups => groups.id === id)
  },

  getTeamById: (state, getters) => (id) => {
    return getters.teams.find(teams => teams.id === id)
  },

  getJobById: (state, getters) => (id) => {
    return getters.jobs.find(jobs => jobs.id === id)
  },

  getUserById: (state, getters) => (id) => {
    return getters.users.find(users => users.id === id)
  },

  getProjectById: (state, getters) => (id) => {
    return getters.projects.find(projects => projects.id === id)
  },

  getPlanById: (state, getters) => (id) => {
    return getters.plans.find(plans => plans.id === id)
  },

  getPlansByUserId: (state, getters) => (userId) => {
    return getters.plans.filter(plans => plans.user_id === userId)
  }
}

const actions = {
  [LOAD_DEPTS] ({commit}) {
    axios.get(`http://localhost:3000/depts`)
    .then(r => commit(LOAD_DEPTS, r.data))
    .catch(e => console.log(e))
  },

  [LOAD_GROUPS] ({commit}) {
    axios.get(`http://localhost:3000/groups`)
    .then(r => commit(LOAD_GROUPS, r.data))
    .catch(e => console.log(e))
  },

  [LOAD_TEAMS] ({commit}) {
    axios.get(`http://localhost:3000/teams`)
    .then(r => commit(LOAD_TEAMS, r.data))
    .catch(e => console.log(e))
  },

  [LOAD_JOBS] ({commit}) {
    axios.get(`http://localhost:3000/jobs`)
    .then(r => commit(LOAD_JOBS, r.data))
    .catch(e => console.log(e))
  },

  [LOAD_USERS] ({commit}) {
    axios.get(`http://localhost:3000/users`)
    .then(r => commit(LOAD_USERS, r.data))
    .catch(e => console.log(e))
  },

  [LOAD_PROJECTS] ({commit}) {
    axios.get(`http://localhost:3000/projects`)
    .then(r => commit(LOAD_PROJECTS, r.data))
    .catch(e => console.log(e))
  },

  [LOAD_PLANS] ({commit}) {
    axios.get(`http://localhost:3000/plans`)
    .then(r => commit(LOAD_PLANS, r.data))
    .catch(e => console.log(e))
  },

  [INIT_STORE] ({commit, dispatch}) {
    dispatch(LOAD_DEPTS)
    dispatch(LOAD_GROUPS)
    dispatch(LOAD_TEAMS)
    dispatch(LOAD_JOBS)
    dispatch(LOAD_USERS)
    dispatch(LOAD_PROJECTS)
    dispatch(LOAD_PLANS)
  },

  [SAVE_PROJECT] ({ commit }, project) {
    commit(SAVE_PROJECT, project)
  },

  [CREATE_PLAN] ({ commit }, plan) {
    commit(CREATE_PLAN, plan)
  }
}

const mutations = {
  [LOAD_DEPTS] (state, data) {
    state.depts = data
  },

  [LOAD_GROUPS] (state, data) {
    state.groups = data
  },

  [LOAD_TEAMS] (state, data) {
    state.teams = data
  },

  [LOAD_JOBS] (state, data) {
    state.jobs = data
  },

  [LOAD_USERS] (state, data) {
    state.users = data
  },

  [LOAD_PROJECTS] (state, data) {
    state.projects = data
  },

  [LOAD_PLANS] (state, data) {
    state.plans = []
    for (let plan of data) {
      // axiosが小数をJSONから文字列で読んでしまうので手動変換
      plan.work = parseFloat(plan.work)
      state.plans.push(plan)
    }
  },

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
