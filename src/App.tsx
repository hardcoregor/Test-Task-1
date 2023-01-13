import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import { ArticlePage, Homepage } from './pages';
import { useAppDispatch, useAppSelector } from './hooks/useTypedSelector';
import { getNews } from './store/features/news/newsSlice';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getNews())
  }, [dispatch])

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
