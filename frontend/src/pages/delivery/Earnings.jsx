import { Wallet, TrendingUp, Bike } from 'lucide-react'
import StatCard from '../../components/StatCard.jsx'
import SimpleLineChart from '../../components/SimpleLineChart.jsx'

const weeklyEarnings = [820, 940, 780, 1100, 990, 1240, 1050]
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export default function DeliveryEarnings() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-navy-900">Earnings</h2>
        <p className="mt-1 text-sm text-ink-500">Track your delivery income</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard label="This Week" value="₹6,920" icon={Wallet} tone="leaf" trend="+9% vs last week" />
        <StatCard label="Deliveries" value="52" icon={Bike} tone="saffron" />
        <StatCard label="Avg. per Delivery" value="₹133" icon={TrendingUp} tone="navy" />
      </div>

      <div className="card p-5">
        <h3 className="mb-4 text-sm font-semibold text-navy-900">Weekly Earnings</h3>
        <div className="h-52">
          <SimpleLineChart data={weeklyEarnings} color="#EC7A2A" height={170} />
        </div>
        <div className="mt-2 flex justify-between text-xs text-ink-300">
          {days.map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>
      </div>

      <div className="card flex items-center justify-between p-5">
        <div>
          <p className="text-sm font-semibold text-navy-900">Payout Wallet</p>
          <p className="text-xs text-ink-500">Weekly payout every Monday</p>
        </div>
        <button className="btn-primary !bg-saffron-500 hover:!bg-saffron-600 !py-2.5 text-sm">Withdraw</button>
      </div>
    </div>
  )
}
