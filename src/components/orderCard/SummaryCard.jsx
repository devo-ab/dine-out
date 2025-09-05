const textColorMap = {
  yellow: "text-yellow-600",
  red: "text-red-600",
  green: "text-green-600",
};

const bgColorMap = {
  yellow: "bg-yellow-200",
  red: "bg-red-200",
  green: "bg-green-200",
};

export default function SummaryCard ({ color, count, label }) {

  return (
    <div className="bg-cardbg rounded-lg p-4 relative overflow-hidden">
      <div className={`text-5xl font-bold mb-2 ${textColorMap[color]}`}>{count}</div>
      <div
        className={`${bgColorMap[color]} bg-opacity-50 text-xs font-medium px-3 py-1 rounded-full inline-block ${textColorMap[color]}`}
      >
        {label}
      </div>
    </div>
  );
};