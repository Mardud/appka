class Goal < ActiveRecord::Base
  belongs_to :user
  has_many :weeks
  after_create :make_week
  after_update :get_started

  def make_week
    1.upto(self.cycle){ |i|
     self.weeks.create(:number => i)}
  end

  def get_started
   date = Date.today + 2
   for week in self.weeks
     for day in week.days
       for task in day.tasks
         self.weeks.find(week).days.find(day).tasks.find(task).update(:date => daty(self.cycles,day.d_num - 1).join("|"))
       end
     end
   end
  end

  def daty(cycles,daynum)
    date = Date.today
    tab = []
    0.upto(cycles-1){ |cycle|
      tab += [date + daynum  + (7  * cycle)]
    }
    return tab
  end


end
