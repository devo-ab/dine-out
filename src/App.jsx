import Header from "./components/Header";
import OrderMain from "./components/OrderMain";

function App() {
  return (
    <div className="container mx-auto px-4 h-screen flex flex-col">
      <Header></Header>
      <div className="flex-1 overflow-auto">
        <OrderMain />
      </div>
    </div>
  );
}

export default App;
