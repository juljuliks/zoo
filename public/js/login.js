const { loginForm } = document;

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const {
    email: { value: email },
    password: { value: password },
  } = e.target;

  const response = await fetch('/admins/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    const data = await response.json();
    window.location.assign(data.link);
  }
});
