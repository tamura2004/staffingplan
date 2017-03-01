class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :number
      t.string :name
      t.references :dept, foreign_key: true
      t.references :group, foreign_key: true
      t.references :job, foreign_key: true
      t.references :team, foreign_key: true
      t.string :smonth
      t.string :emonth

      t.timestamps
    end
  end
end
