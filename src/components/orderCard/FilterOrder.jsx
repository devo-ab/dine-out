import Funnel from "../svg/Funnel";

export default function FilterOrder({ onFilter }) {
  return (
    <div class="flex gap-4 items-center">
      <Funnel />
      <select
        onChange={(e) => onFilter(e.target.value)}
        className="bg-zinc-900 text-white border border-zinc-700 rounded-sm px-3 py-1 cursor-pointer"
      >
        <option value={""}>All</option>
        <option value={"PENDING"}>Pending</option>
        <option value={"DELIVERED"}>Delivered</option>
      </select>
    </div>
  );
}
