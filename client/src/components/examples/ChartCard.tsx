import ChartCard from '../ChartCard';

const lineData = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 600 },
  { name: "Mar", value: 500 },
  { name: "Apr", value: 800 },
  { name: "May", value: 700 },
  { name: "Jun", value: 900 },
];

const pieData = [
  { name: "Phishing", value: 400 },
  { name: "Malware", value: 300 },
  { name: "DDoS", value: 200 },
  { name: "Insider", value: 100 },
];

const barData = [
  { name: "Mon", value: 120 },
  { name: "Tue", value: 150 },
  { name: "Wed", value: 180 },
  { name: "Thu", value: 90 },
  { name: "Fri", value: 200 },
];

export default function ChartCardExample() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
      <ChartCard 
        title="Threat Trend Over Time" 
        type="line" 
        data={lineData}
        description="Daily threat detections"
      />
      <ChartCard 
        title="Threat Distribution" 
        type="pie" 
        data={pieData}
        description="By category"
      />
      <div className="lg:col-span-2">
        <ChartCard 
          title="Weekly Activity" 
          type="bar" 
          data={barData}
          description="Incidents per day"
        />
      </div>
    </div>
  );
}
