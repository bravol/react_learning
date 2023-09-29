import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import Todos from "./components/todos/todos";

// import PackingList from "./pages/ConditionalItem";
// import MobileDrawer from "./pages/MobileDrawer";
// import Gallery from "./pages/Profile";
// import TeaSet from "./pages/TeaSet";
// import Props from "./pages/children/Props";
// import GalleryMore from "./pages/interactivity/Gallery";
// import List from "./pages/lists/List";
// import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div className="App">
      {/* <p>This is react learning</p>
      <Expenses items={expenses} /> */}
      <Todos />

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
