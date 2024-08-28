
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Login from './components/Login';
import Register from './components/Register';
import RecipeList from './components/RecipeList';
import AddRecipe from './components/AddRecipe';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recipes" element={<RecipeList />} />
          <Route path="/add-recipe" element={<AddRecipe />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
