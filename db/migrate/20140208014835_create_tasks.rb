class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :t_name
      t.string :date
      t.boolean :done
      t.references :day, index: true

      t.timestamps
    end
  end
end
