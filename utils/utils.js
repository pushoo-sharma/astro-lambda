// utils.js
const axios = require('axios');

// Utility function to make API requests
const fetchDataFromApi = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching data from API:', error.message);
    throw error;
  }
};

// Utility function to transform user data
const transformUserData = (users) => {
  return users.map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
  }));
};

module.exports = {
  fetchDataFromApi,
  transformUserData,
};
