export default function OrderTable({ orders, onDelete, onDeliver }) {
  return (
    <div className="w-full">
      <table className="min-w-full responsive-table">
        <thead>
          <tr className="text-left text-sm">
            <th className="pb-3 font-medium">ID</th>
            <th className="pb-3 font-medium">Customer Name</th>
            <th className="pb-3 font-medium">Items</th>
            <th className="pb-3 font-medium">Amount</th>
            <th className="pb-3 font-medium">Status</th>
            <th className="pb-3 font-medium">Action</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {[...orders].reverse().map((order, index) => (
            <tr key={index} className="border-t border-gray-700">
              <td data-label="ID" className="py-3">
                {order.id}
              </td>
              <td data-label="Customer Name" className="py-3">
                {order.name}
              </td>
              <td data-label="Items" className="py-3">
                {order.items}
              </td>
              <td data-label="Amount" className="py-3">
                {order.amount}
              </td>
              <td data-label="Status" className="py-3">
                <span className={order.status === "PENDING" ? "text-red-500" : "text-green-500"}>
                  {order.status}
                </span>
              </td>
              <td data-label="Action" className="py-3">
                <div className="flex gap-2 items-center">
                  <button
                    onClick={() => onDelete(order.id)}
                    className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full transition-colors duration-300"
                  >
                    Delete
                  </button>
                  {order.status === "PENDING" && (
                    <button
                      onClick={() => onDeliver(order.id)}
                      className="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300"
                    >
                      DELIVER
                    </button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
