const uuid = require('uuid')

let skillroot = {procs: []}
// console.log(uuid.v4())

for (let i = 0; i < 3; i++) {
  let proc = {id: uuid.v4(), name: `p${i}`, acts: []}

  for (let j = 0; j < 3; j++) {
    let act = {id: uuid.v4(), name: `a${i}${j}`, skills: []}

    for (let k = 0; k < 3; k++) {
      let skill = {id: uuid.v4(), name: `s${i}${j}${k}`}
      act.skills.push(skill)
    }

    proc.acts.push(act)
  }

  skillroot.procs.push(proc)
}


let users = []
for (let i = 0; i < 10; i++) {
  let user = {id: uuid.v4(), name: `Mr${i}`}
  users.push(user)
}

console.log(JSON.stringify(users, null, "  "))
