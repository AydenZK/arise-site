import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'; // This now contains your Tailwind styles

// Import your components
import Layout from './Layout';
import Home from './Home';
import TestPacks from './TestPacks';

// A utility function from your Layout file - we need to define it
const createPageUrl = (page: string) => {
  const pageName = page.toLowerCase();
  if (pageName === 'home') return '/';
  // Simple conversion from "TestPacks" to "test-packs"
  const kebabCase = pageName.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
  return `/${kebabCase}`;
};

// Since createPageUrl is used in Layout.js, let's update it.
// Ideally, this utility function would be in its own file.
// For now, you should find `createPageUrl` in Layout.js and
// replace it with the new function definition above.
// Or, even better, create a new file `src/utils.js` and place it there.

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={createPageUrl("Home")} element={<Home />} />
          <Route path={createPageUrl("TestPacks")} element={<TestPacks />} />
          {/* Add more routes here for other pages in the future */}
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);