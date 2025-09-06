export default function NameInput({getName}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">Customer Name</label>
      <input
      onChange={(e) => getName(e.target.value)}
        type="text"
        className="w-full bg-gray-700 bg-opacity-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
      />
    </div>
  );
}
