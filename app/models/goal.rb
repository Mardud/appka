class Goal < ActiveRecord::Base
  belongs_to :user
  has_many :weeks
  after_create :make_week

  def make_week
    1.upto(self.cycle){ |i|
     self.weeks.create(:number => i)}
  end
end
