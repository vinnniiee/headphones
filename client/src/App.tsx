import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Image } from "react-bootstrap";

function App() {
  return (
    <div className="flex flex-col justify-between items-center bg-white h-full ">
      <Header />
      <main className="sm:p-8 flex flex-col justify-start items-center w-full">
        <Outlet/>
      </main>
      <Footer />
      <ToastContainer/>
    </div>
  );
}

export default App;
