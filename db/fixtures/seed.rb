DEPTS = [
  { id: 0, name: '第一営業部' },
  { id: 1, name: '第二総務部' }
]

DEPTS.each do |dept|
  Dept.seed do |s|
    s.id = dept[:id]
    s.name = dept[:name]
  end
end

GROUPS = [
  { id: 0, name: '食品販売グループ', dept_id: 0 },
  { id: 1, name: '住宅販売グループ', dept_id: 0 },
  { id: 2, name: '人事管理グループ', dept_id: 1 }
]

GROUPS.each do |group|
  Group.seed do |s|
    s.id = group[:id]
    s.name = group[:name]
    s.dept_id = group[:dept_id]
  end
end

JOBS = [
  { id: 0, name: '部長' },
  { id: 1, name: '課長' },
  { id: 2, name: 'チーフ' }
]

JOBS.each do |job|
  Job.seed do |s|
    s.id = job[:id]
    s.name = job[:name]
  end
end

TEAMS = [
  { id: 0, name: 'SOFIA' },
  { id: 1, name: 'AGS' }
]

TEAMS.each do |team|
  Team.seed do |s|
    s.id = team[:id]
    s.name = team[:name]
  end
end

USERS =  [
  { id: 0, number: 'a123456', name: '山田 太郎', dept_id: 0, group_id: 0, team_id: 0 },
  { id: 1, number: 'b234567', name: '真田 次郎', dept_id: 0, group_id: 0, team_id: 1, start_month: 201704 },
  { id: 2, number: 'c345678', name: '上杉 三郎', dept_id: 0, group_id: 1, team_id: 1 },
  { id: 3, number: 'd456789', name: '武田 士郎', dept_id: 0, group_id: 1, team_id: 0, end_month: 201702 },
  { id: 4, number: 'e567890', name: '織田 吾郎', dept_id: 1, group_id: 2, team_id: 0 }
]

USERS.each do |user|
  User.seed do |s|
    s.id = user[:id]
    s.number = user[:number]
    s.name = user[:name]
    s.dept_id = user[:dept_id]
    s.group_id = user[:group_id]
    s.start_month = user[:start_month] || "201701"
    s.end_month = user[:end_month] || "202712"
  end
end

PROJECTS =  [
  { id: 0, number: '201703011930-00-01', name: '食品衛生安全法に伴う社内ルール整備' },
  { id: 1, number: '201703021730-00-02', name: 'インフルエンザ流行に伴う自宅待機命令' },
  { id: 2, number: '201703031830-00-03', name:'三世代住宅の安全性検証実験' },
  { id: 3, number: '201703111630-00-04', name: '介護休暇の制定に伴う補助金算定ツールの提供'}
]

PROJECTS.each do |project|
  Project.seed do |s|
    s.id = project[:id]
    s.number = project[:number]
    s.name = project[:name]
    s.start_month = 201701
    s.end_month = 202712
  end
end

PLANS = [
  { id: 0, month: 201703, user_id: 0, project_id: 0, work: 0.3 },
  { id: 1, month: 201703, user_id: 0, project_id: 1, work: 0.4 },
  { id: 2, month: 201703, user_id: 0, project_id: 2, work: 0.5 },
  { id: 3, month: 201703, user_id: 1, project_id: 0, work: 0.6 },
  { id: 4, month: 201703, user_id: 1, project_id: 1, work: 0.7 },
  { id: 5, month: 201703, user_id: 1, project_id: 2, work: 0.8 },
  { id: 3, month: 201703, user_id: 2, project_id: 0, work: 0.9 },
  { id: 4, month: 201703, user_id: 2, project_id: 1, work: 1.0 },
  { id: 5, month: 201703, user_id: 2, project_id: 2, work: 1.1 }
]

PLANS.each do |plan|
  Plan.seed do |s|
    s.id = plan[:id]
    s.month = plan[:month]
    s.user_id = plan[:user_id]
    s.project_id = plan[:project_id]
    s.work = plan[:work]
  end
end
