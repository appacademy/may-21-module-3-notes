// Phase 1:
fetch("/products", {
  method: "POST",
  body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
});

// Phase 2:
fetch("/products", {
  method: "POST",
  body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
}).then(res => {
  console.log({
    status: res.status, // 200
    location: res.headers.get('Location'), // undefined
    redirected: res.redirected, // true
    url: res.url // /products/2
  });
});

// Phase 3:
const params = new URLSearchParams({
  name: "Caribbean Delight Coffee",
  description: "Made by Manatee Coffee",
  price: 11.99,
  categories: "grocery"
});
// params.append("categories", "health"); // if you want to add other categories
fetch("/products", {
  method: "POST",
  body: params,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
}).then(res => {
  console.log({
    redirected: res.redirected // true
  });
});