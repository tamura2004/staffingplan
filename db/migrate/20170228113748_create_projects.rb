class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.string :number
      t.string :name
      t.string :start_month
      t.string :end_month

      t.timestamps
    end
  end
end
