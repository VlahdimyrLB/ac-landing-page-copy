import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./header";
import Main from "./main";
import Navbar from "./navbar";
import Footer from "./footer";
import CTA from "./CTA";
import Newsfeed from "./newsfeed";

const Index = () => {
  return (
    <div className="relative">
      <Header />
      <Navbar />
      <Main />
      <Newsfeed />
      <CTA />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);
