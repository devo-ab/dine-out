import { useState } from "react";
import chicken from "../assets/chicken.svg";
import hamburger from "../assets/hamburger.svg";
import pizza from "../assets/pizza.svg";
import submarine from "../assets/submarine.svg";
import SummaryCard from "../components/orderCard/SummaryCard";
import FilterOrder from "./orderCard/FilterOrder";
import NameInput from "./orderCard/NameInput";
import OrderItem from "./orderCard/OrderItem";
import OrderTable from "./orderCard/OrderTable";

const defaultOrders = [
  { id: 1, name: "Sumit Saha", items: 5, amount: 123123, status: "PENDING" },
  { id: 2, name: "Akash Ahmed", items: 5, amount: 123123, status: "DELIVERED" },
  { id: 3, name: "Saad Hasan", items: 5, amount: 123123, status: "PENDING" },
  { id: 4, name: "MD Salahuddin", items: 5, amount: 123123, status: "PENDING" },
  { id: 5, name: "Ferdous", items: 5, amount: 123123, status: "PENDING" },
];

// item list

const itemsList = [
  {
    name: "Hamburger",
    price: 300,
    img: hamburger,
    added: false,
  },
  {
    name: "Chicken Nuggets",
    price: 300,
    img: chicken,
    added: false,
  },
  {
    name: "Submarine Sandwich",
    price: 300,
    img: submarine,
    added: false,
  },
  {
    name: "Pizza slices",
    price: 300,
    img: pizza,
    added: false,
  },
];

export default function OrderMain() {
  const [orders, setOrder] = useState(defaultOrders);
  // orderItem
  const [items, setItems] = useState(itemsList);
  const [orderList, setOrderList] = useState([]);
  // orderItem
  const [name, setName] = useState();
  const [amount, setAmount] = useState(0);

  // order delete
  const handleDeleteOrder = (orderId) => {
    const afterDelete = orders.filter((order) => order.id !== orderId);
    setOrder(afterDelete);
  };
  // order delete

  // deliver status update
  const handleDeliver = (orderId) => {
    const updateOrder = orders.map((order) =>
      order.id === orderId ? { ...order, status: "DELIVERED" } : order
    );
    setOrder(updateOrder);
  };
  // deliver status update

  // FilterOrder
  const handleFilter = (filterText) => {
    if (filterText === "") {
      setOrder(defaultOrders);
    } else {
      const afterFilter = defaultOrders.filter((order) => order.status === filterText);
      setOrder(afterFilter);
    }
  };
  // FilterOrder

  // order count
  const totalCount = orders.length;
  const pendingCount = orders.filter((order) => order.status === "PENDING").length;
  const deliveredCount = orders.filter((order) => order.status === "DELIVERED").length;
  // order count

  // get name
  const getName = (e) => {
    setName(e);
  };
  // get name

  // orderItem
  const createOrder = (item) => {
    const existsItem = orderList.find((order) => order.name === item.name);

    if (existsItem) {
      setOrderList((removeItem) => removeItem.filter((remove) => remove.name !== item.name));

      setItems((menuList) =>
        menuList.map((menu) => (menu.name === item.name ? { ...menu, added: false } : menu))
      );

      setAmount((preAmount) => preAmount - item.price);
    } else {
      setOrderList((orderItem) => [...orderItem, item]);

      setItems((menuList) =>
        menuList.map((menu) => (menu.name === item.name ? { ...menu, added: true } : menu))
      );
      setAmount((preAmount) => preAmount + item.price);
    }
  };
  // orderItem

  // place order
  const placeOrder = () => {
    const newOrder = {
      id: orders.length + 1,
      name: name,
      items: orderList.length,
      amount: amount,
      status: "PENDING",
    };

    setOrder((preOrders) => [...preOrders, newOrder]);
  };
  // place order

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow text-white">
      {/* Create Order Section */}
      <div className="bg-cardbg rounded-lg p-6 min-h-[400px] md:h-[calc(100vh_-_130px)]">
        <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
        <p className="text-gray-400 text-sm mb-4">
          Accurately fulfill customer orders based on a precise understanding of their requirements.
        </p>

        {/* Customer Name Input Start*/}
        <div className="mb-4">
          <NameInput getName={getName}></NameInput>
        </div>
        {/* Customer Name Input End*/}

        {/* Choose Items Start*/}
        <OrderItem onOrder={createOrder} items={items}></OrderItem>
        {/* Choose Items End*/}

        {/* Place Order Button Start*/}
        <button
          onClick={placeOrder}
          className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
        >
          Place Order ({amount})
        </button>
        {/* Place Order Button End*/}
      </div>

      {/* Order Dashboard */}
      <div className="md:col-span-2 min-h-[400px] md:h-[calc(100vh_-_130px)] flex flex-col">
        {/* Order Summary */}
        <div>
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <SummaryCard color={"yellow"} count={totalCount} label="Total Order" />
            <SummaryCard color="red" count={pendingCount} label="Pending" />
            <SummaryCard color="green" count={deliveredCount} label="Delivered" />
          </div>
        </div>

        {/* Order Reports */}
        <div className="flex-1 flex flex-col">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <h2 className="text-xl font-bold">Order Reports</h2>
            <FilterOrder onFilter={handleFilter}></FilterOrder>
          </div>

          <div className="bg-cardbg rounded-lg p-4 mt-4 flex-1 overflow-auto">
            <div className="reports-container overflow-x-auto">
              <OrderTable
                orders={orders}
                onDelete={handleDeleteOrder}
                onDeliver={handleDeliver}
              ></OrderTable>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
