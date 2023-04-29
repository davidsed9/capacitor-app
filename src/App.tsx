import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div style={{ margin: "0 1rem 0 1rem", paddingTop: "env(safe-area-inset-top)"}}>
      <h1>David A</h1>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
