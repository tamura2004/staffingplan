MODELS = %w(dept group job team user project plan)








MODELS.each do |model|
  mm = model + 's'
  mu = mm.upcase
  mc = model.capitalize

#   puts <<-"JS"
#   get#{mc}ById (state, getters) {
#     return (id) => getters.#{mm}.find(#{model} => id === #{model}.id) || new #{mc}()
#   },

#   JS
# end


  puts <<-"JS"
class #{mc} {
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

  JS
end

# puts "import {"

# MODELS.each do |model|
#   m = model.capitalize
#   puts "  #{m},"
# end

# puts "} from '@/vuex/models'"