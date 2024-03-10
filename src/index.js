import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./header";
import Main from "./main";
import Navbar from "./navbar";

const Index = () => {
  return (
    <div className="relative">
      <Header />
      <Navbar />
      <Main />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);
