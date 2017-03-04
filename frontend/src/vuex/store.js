import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

// import router from '../router'
// import http from './axios'
import axios from 'axios'

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

import {
  Dept,
  Group,
  Job,
  Team,
  User,
  Project,
  Plan
} from './models'

const state = {
  edit: {
    user: null,
    project: null
  },
  depts: [],
  groups: [],
  jobs: [],
  teams: [],
  users: [],
  projects: [],
  plans: []
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

  getDeptById (state, getters) {
    return (id) => getters.depts.find(dept => id === dept.id) || new Dept()
  },

  getGroupById (state, getters) {
    return (id) => getters.groups.find(group => id === group.id) || new Group()
  },

  getJobById (state, getters) {
    return (id) => getters.jobs.find(job => id === job.id) || new Job()
  },

  getTeamById (state, getters) {
    return (id) => getters.teams.find(team => id === team.id) || new Team()
  },

  getUserById (state, getters) {
    return (id) => getters.users.find(user => id === user.id) || new User()
  },

  getProjectById (state, getters) {
    return (id) => getters.projects.find(project => id === project.id) || new Project()
  },

  getPlanById (state, getters) {
    return (id) => getters.plans.find(plan => id === plan.id) || new Plan()
  },

  getPlansByUserId (state, getters) {
    return (userId) => getters.plans.filter(plan => userId === plan.user_id)
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
    state.depts = data.map((dept) => new Dept(dept))
  },

  [LOAD_GROUPS] (state, data) {
    state.groups = data.map((group) => new Group(group))
  },

  [LOAD_JOBS] (state, data) {
    state.jobs = data.map((job) => new Job(job))
  },

  [LOAD_TEAMS] (state, data) {
    state.teams = data.map((team) => new Team(team))
  },

  [LOAD_USERS] (state, data) {
    state.users = data.map((user) => new User(user))
  },

  [LOAD_PROJECTS] (state, data) {
    state.projects = data.map((project) => new Project(project))
  },

  [LOAD_PLANS] (state, data) {
    state.plans = data.map((plan) => new Plan(plan))
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
