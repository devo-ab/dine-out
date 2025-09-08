import logo from "../assets/logo.svg"

export default function Header() {
  return (
    <div>
      <nav className="bg-navbg rounded-full mt-4 px-8 py-3 ">
        <div className="flex items-center ">
          <div className="text-[#FF602C] mr-2">
            <img src={logo} />
          </div>
          <h1 className="text-2xl font-bold text-white">
            <span className="text-[#FF602C]">Dine</span>Out
          </h1>
        </div>
      </nav>
    </div>
  );
}
