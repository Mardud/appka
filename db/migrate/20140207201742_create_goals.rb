class CreateGoals < ActiveRecord::Migration
  def change
    create_table :goals do |t|
      t.string :name
      t.integer :cycle
      t.integer :cycles
      t.boolean :start
      t.references :user, index: true

      t.timestamps
    end
  end
end
