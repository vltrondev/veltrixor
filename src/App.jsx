import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import './App.css';

function App() {
  return (
    <Router>
      <div className="veltrixor-app">
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
