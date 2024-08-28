import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('http://localhost:3000/recipes', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setRecipes(response.data);
      } catch (error) {
        console.error('Error fetching recipes', error);
      }
    };
    fetchRecipes();
  }, [token]);

  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe._id}>{recipe.name}</li>
      ))}
    </ul>
  );
};

export default RecipeList;
