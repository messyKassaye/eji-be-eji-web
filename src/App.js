import "./App.less";
import "antd/dist/antd.less";
import AppHeader from "../src/components/header/AppHeader";
import InnerRoute from "./Routes/InnerRoute";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      <div className="flex-grow md:pr-20 md:pl-20">
        <InnerRoute />
      </div>
      <Footer />
    </div>
  );
}

export default App;
