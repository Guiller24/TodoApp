import { Router, Route, Routes } from 'react-router-dom';
import GetStartedCard from './components/GetStartedCard';
import LoginCard from './components/LoginCard';
import SignUpCard from './components/SignUpCard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetStartedCard />} />
        <Route path="/login" element={<LoginCard />} />
        <Route path="/signup" element={<SignUpCard />} />
      </Routes>
    </Router>
  );
}

export default App;
