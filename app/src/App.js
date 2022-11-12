import "./App.css";
import { SideNav } from "./components/sidebar/sidebar";
import { ImageCarousel } from "./components/carousel/carousel";

function App() {
  return (
    <div className="App">
      <SideNav></SideNav>
      <ImageCarousel></ImageCarousel>
    </div>
  );
}

export default App;
