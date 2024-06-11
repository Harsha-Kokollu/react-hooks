import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Counter from './components/Counter';
import DataFetcher from './components/DataFetcher';
import ThemedComponent from './components/ThemedComponent';
import ReducerCounter from './components/ReducerCounter';
import FocusInput from './components/FocusInput';
import CallbackComponent from './components/CallbackComponent';
import MemoValue from './components/MemoValue';
import { AuthProvider } from './contextApi/AuthProvider';

export const ThemeContext = React.createContext('light');

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/counter">useState</Link>
              </li>
              <li>
                <Link to="/data-fetcher">useEffect</Link>
              </li>
              <li>
                <Link to="/themed">useContext</Link>
              </li>
              <li>
                <Link to="/reducer">useReducer</Link>
              </li>
              <li>
                <Link to="/focus-input">useRef</Link>
              </li>
              <li>
                <Link to="/callback">useCallback</Link>
              </li>
              <li>
                <Link to="/expensive-calculation">useMemo</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/counter" element={<Counter />} />
            <Route path="/data-fetcher" element={<DataFetcher />} />
            <Route path="/themed" element={<ThemedComponent />} />
            <Route path="/reducer" element={<ReducerCounter />} />
            <Route path="/focus-input" element={<FocusInput />} />
            <Route path="/callback" element={<CallbackComponent />} />
            <Route path="/expensive-calculation" element={<MemoValue />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
