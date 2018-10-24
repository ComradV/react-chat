import fetch from 'isomorphic-fetch';


export default (path, token, options, payload) => {
  const authHeader = token?{'Authorization': `Bearer ${token}`}:{};
  return fetch(`http://localhost:8001/v1/${path}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        ...authHeader
      },
      body: JSON.stringify(payload),
      ...options
    })
    .then(res => res.json())
    .then(json => {
      if (json.success) {
        return json;
      }
      throw new Error(json.message)
    })
  }
