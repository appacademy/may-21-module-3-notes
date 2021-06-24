// Example for how to read the response components for a JSON API server using `fetch`:
fetch('/artists', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Led Zeppelin'
  })
}).then(async res => {
  console.log(res.status);
  console.log(res.headers.get('Content-Type'));
  const body = await res.json();
  console.log(body);
});

// You can also make the request using Postman