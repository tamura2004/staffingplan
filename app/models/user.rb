class User < ApplicationRecord
  belongs_to :dept
  belongs_to :group
  belongs_to :job
  belongs_to :team
end
