import "./App.css";
import PackingList from "./pages/ConditionalItem";
import MobileDrawer from "./pages/MobileDrawer";
import Gallery from "./pages/Profile";
import TeaSet from "./pages/TeaSet";
import Props from "./pages/children/Props";
import GalleryMore from "./pages/interactivity/Gallery";
import List from "./pages/lists/List";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <p>This is react learning</p>

      {/* <PackingList />
      <hr />
      <Gallery />
      <hr />
      <TeaSet />
      <hr />
      <List />
      <MobileDrawer />
      <Props /> */}
      <GalleryMore />
    </div>
  );
}

export default App;
