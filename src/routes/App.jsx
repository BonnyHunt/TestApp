import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { Layout } from '../containers/Layout';


function App() {
  return (
    <>
      <HashRouter>
        <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='*' element={<p>Not Found</p>} />
        </Routes>
        </Layout>
      </HashRouter>
    </>
  );
}

export { App };