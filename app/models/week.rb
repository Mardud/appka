class Week < ActiveRecord::Base
  belongs_to :goal
  has_many :days
  after_create :make_day

  def make_day
    1.upto(7){ |i|
      self.days.create(:d_num => i)}
  end
end
