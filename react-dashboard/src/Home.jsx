import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import {
  BarChart,
  Bar,
  // Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

import RadialBarChartExample from "./RadialBarChart";

function Home() {
  const data = [
    {
      name: "Page A",
      Galla: 4000,
      Pagta: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      Galla: 3000,
      Pagta: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      Galla: 2000,
      Pagta: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      Galla: 2780,
      Pagta: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      Galla: 1890,
      Pagta: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      Galla: 2390,
      Pagta: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      Galla: 3490,
      Pagta: 4300,
      amt: 2100,
    },
  ];

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DashBoard</h3>
      </div>
      <div className="main-card">
        <div className="card">
          <div className="card-inner">
            <h3>Products</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>300</h1>
        </div>

        <div className="card">
          <div className="card-inner">
            <h3>Categories</h3>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
          <h1>12</h1>
        </div>

        <div className="card">
          <div className="card-inner">
            <h3>Customers</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>33</h1>
        </div>

        <div className="card">
          <div className="card-inner">
            <h3>Alert</h3>
            <BsFillBellFill className="card_icon" />
          </div>
          <h1>42</h1>
        </div>
      </div>

      <div className="charts">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Pagta" fill="#2222e2" />
            <Bar dataKey="Galla" fill="#22ca9d" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Pagta"
              stroke="#0000FF"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="Galla" stroke="#FF0000" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <RadialBarChartExample />
    </main>
  );
}

export default Home;
