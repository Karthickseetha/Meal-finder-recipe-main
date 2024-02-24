// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HomeRoute, Root, ErrorPage, Auth, Recipe} from './routes';
import { useUserContext } from './context/usercontext/user.context';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<HomeRoute />} />
          <Route path="/recipe" element={<ProtectedRecipePage />} />
          <Route path="/auth" element={<Auth />} />

        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

const ProtectedRecipePage = () => {
  const { currentUser } = useUserContext();

  if (!currentUser) {
    return <Navigate to="/auth" />;
  }

  return <Recipe />;
};

export default App;
