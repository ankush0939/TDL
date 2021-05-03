import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { TodoItem } from "./MyComponents/TodoItem";
import { Footer } from "./MyComponents/Footer";

function App() {
  return (
    <>
      <Header title="My Tods List" searchBar={true} />
      <Todos />
      <TodoItem />
      <Footer />
    </>
  );
}

export default App;
