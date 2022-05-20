import "./App.css";
import { Suspense } from "react";
import Users from "./components/Users";

function App() {
  return (
    <div className="listContainer">
      <Suspense fallback="LOADING...">
        <Users />
      </Suspense>
    </div>
  );
}

export default App;

