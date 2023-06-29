import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";
import Kiosk from "./components/Kiosk";
import ZCounter from "./components/zcounter";
import ZKiosk from "./components/zkiosk";

function App() {
  return (
    <div>
      {/* <div className="w-full h-24 bg-sb-gary2 border-b-2 border-cyan-50 ">
          <img className="w-20 h-20 m-auto pt-3" src="logo2.png" />
      </div>   */}
        {/* <ZCounter/> */}
        <ZKiosk></ZKiosk>

    </div>
  );
}

export default App;
