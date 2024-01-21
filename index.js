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

// Your Lambda function
module.exports.handler = async (event) => {
  // URL for the JSONPlaceholder users endpoint
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  try {
    // Call the utility function to fetch user data from the API
    const userData = await fetchDataFromApi(apiUrl);

    // Transform the user data
    const transformedData = transformUserData(userData);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Go Serverless v3.0! Your function executed successfully!",
        input: event,
        users: transformedData, // Include the transformed data in the response
      }),
    };
  } catch (error) {
    // Handle errors here
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal Server Error',
      }),
    };
  }
};
