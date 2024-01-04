const BASE_URL = 'https://mock.apifox.com/m1/3857333-0-default';

export const request = (endpoint: string, method = 'GET', body = null) => {
  const url = `${BASE_URL}${endpoint}`;

  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      // Add any other headers here
    },
    body: body ? JSON.stringify(body) : null,
  };

  return fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error:', error);
      throw error;
    });
};
