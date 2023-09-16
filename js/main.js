const options = {
    method: 'POST',
    headers: {Authorization: 'Bearer sk-35b6d2b3d381420793d2ae7ce2a6cf8d'}
  };
  
  fetch('https://api.worqhat.com/authentication', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));