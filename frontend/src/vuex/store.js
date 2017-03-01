import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

import router from '../router'
// import http from './axios'

import {
  CREATE_USER_SKILL,
  LIST_USER_SKILLS
} from './mutation-types'
import { USERS, SKILLTREE } from './users'

const state = {
  user: null,
  users: USERS,
  skilltree: SKILLTREE,
  proc: null,
  act: null,
  skill: null,
  usersSkills: []
}

const actions = {
  [CREATE_USER_SKILL] ({ commit }, level) {
    commit(CREATE_USER_SKILL, level)
  },
  [LIST_USER_SKILLS] ({ commit }, userId) {
    commit(LIST_USER_SKILLS, userId)
    router.push('/users')
  }
}

const getters = {
  users: state => state.users,
  user: state => state.user,
  skilltree: state => state.skilltree,
  proc: state => state.proc,
  act: state => state.act,
  skill: state => state.skill,
  usersSkills: state => state.usersSkills
}

const mutations = {
  [CREATE_USER_SKILL] (state, level) {
    state.users_skills.push({
      userId: state.user.id,
      skill_id: state.skill.id,
      level: level
    })
  },
  [LIST_USER_SKILLS] (state, userId) {
    for (const user of state.users) {
      if (user.id === userId) {
        state.user = user
      }
    }
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
