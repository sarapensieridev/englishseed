import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import './bigChartBox.scss'
import { data1 } from '../../data'


const BigChartBox = () => {
  return (
    <div className='bigChartBox'>
      <h1>Revenue Analytics</h1>
      <div className="chart">
      <ResponsiveContainer width="99%" height="100%">
        <AreaChart
          data={data1}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="electronic" stackId="1" stroke="#bc4749" fill="#bc4749" />
          <Area type="monotone" dataKey="clothes" stackId="1" stroke="#1dd3b0" fill="#1dd3b0" />
          <Area type="monotone" dataKey="books" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
      </div>
    </div>
  )
}

export default BigChartBox
