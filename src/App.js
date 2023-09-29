import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import Todos from "./components/todos/todos";
import { expenses } from "./data/data";

// import PackingList from "./pages/ConditionalItem";
// import MobileDrawer from "./pages/MobileDrawer";
// import Gallery from "./pages/Profile";
// import TeaSet from "./pages/TeaSet";
// import Props from "./pages/children/Props";
// import GalleryMore from "./pages/interactivity/Gallery";
// import List from "./pages/lists/List";
// import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Expenses items={expenses} />
      {/* <Todos /> */}

      {/* <PackingList />
      <hr />
      <Gallery />
      <hr />
      <TeaSet />
      <hr />
      <List />
      <MobileDrawer />
      <Props /> */}
      {/* <GalleryMore /> */}
    </div>
  );
}

export default App;
