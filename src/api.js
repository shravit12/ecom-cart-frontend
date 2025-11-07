const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000/api';

export async function fetchProducts() {
  const res = await fetch(`${API_BASE}/products`);
  return res.json();
}

export async function fetchCart() {
  const res = await fetch(`${API_BASE}/cart`);
  return res.json();
}

export async function addToCart(productId, qty = 1) {
  const res = await fetch(`${API_BASE}/cart`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ productId, qty })
  });
  return res.json();
}

export async function deleteCartItem(id) {
  const res = await fetch(`${API_BASE}/cart/${id}`, { method: 'DELETE' });
  return res.json();
}

export async function checkout(cartItems, name, email) {
  const res = await fetch(`${API_BASE}/checkout`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ cartItems, name, email })
  });
  return res.json();
}
