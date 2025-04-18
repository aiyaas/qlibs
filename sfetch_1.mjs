/**
 * A universal API fetching function that simplifies handling multiple endpoints
 * while avoiding conflicts
 *
 *
 * @param {Object} options - Options for the fetch request
 * @param {string} options.endpoint - The API endpoint
 * @param {string} [options.method='GET'] - HTTP method (e.g., GET, POST, PUT, DELETE)
 * @param {Object} [options.headers={}] - Additional headers.
 * @param {Object} [options.body] - Request body for POST/PUT requests
 * 
 * @returns {Promise<Object>} - Response type JSON object 
 */
async function fetchWebApi(endpoint, { method = 'GET', headers = {}, body = null, } = {}) {
  // Authorization token that must have been created previously. See : undefined
  try {
    const res = await fetch(endpoint, {
      headers: {
        'Content-Type': 'application/json',
        ...headers, // Merge custom headers for 'Authorization'
      },
      method,
      body:body ? JSON.stringify(body) : null, // Serialize body if provided
      signal: new AbortController().signal, // This improves control over your fetch() and helps prevent
    });
    console.log(res.status); 
    
    // Parse JSON response 
    return await res.json();
  } catch (e) {
    throw new Error(e.stack); // Re-throw error for further handling
  }
};


