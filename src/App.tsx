import { Routes, Route } from 'react-router-dom';

import { ArticlePage, Homepage } from './pages';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/articles" element={<ArticlePage />} />
      </Routes>
    </div>
  );
}

export default App;
