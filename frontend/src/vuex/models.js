import moment from 'moment'

const BLANK = ''

class Dept {
  constructor (data) {
    const base = {
      id: null,
      name: BLANK
    }
    Object.assign(this, base, data)
  }
}

class Group {
  constructor (data) {
    const base = {
      id: null,
      name: BLANK,
      dept_id: null
    }
    Object.assign(this, base, data)
  }
}

class Job {
  constructor (data) {
    const base = {
      id: null,
      name: BLANK
    }
    Object.assign(this, base, data)
  }
}

class Team {
  constructor (data) {
    const base = {
      id: null,
      name: BLANK
    }
    Object.assign(this, base, data)
  }
}

class User {
  constructor (data) {
    const base = {
      id: null,
      name: BLANK,
      number: BLANK,
      dept_id: null,
      group_id: null,
      job_id: null,
      team_id: null,
      start_month: '190001',
      end_month: '290012'
    }
    Object.assign(this, base, data)
  }
}

class Project {
  constructor (data) {
    const base = {
      id: null,
      name: BLANK,
      number: BLANK,
      start_month: '190001',
      end_month: '290012'
    }
    Object.assign(this, base, data)
  }
}

class Plan {
  constructor (data) {
    const base = {
      id: null,
      month: moment().format('YYYYMM'),
      work: 0,
      user_id: null,
      project_id: null
    }
    Object.assign(this, base, data)
    this.work = parseFloat(this.work)
  }
}

export {
  Dept,
  Group,
  Job,
  Team,
  User,
  Project,
  Plan
}
