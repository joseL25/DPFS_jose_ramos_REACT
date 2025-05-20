// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Sidebar } from './components/sidebar/Sidebar'
import { Dashboard } from './components/dashboard/index'

function App() {

  return (
    <div className="container">
      <Sidebar/>
      <Dashboard/>
    </div>
  );
}

export default App;
