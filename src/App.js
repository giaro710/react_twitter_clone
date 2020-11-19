import "./App.css";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";

const App = () => {
  return (
    <div className="app">
      <Sidebar />

      <Feed />

      {/* Widgets */}
    </div>
  );
};

export default App;
