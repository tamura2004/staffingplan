class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.string :number
      t.string :name
      t.string :smonth
      t.string :emonth

      t.timestamps
    end
  end
end
