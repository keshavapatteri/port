function handleSubmit(event) {
  event.preventDefault(); // Prevent form submission for now

  // Validation
  const fullName = document.getElementById('fullname').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (fullName === '' || email === '' || password === '') {
    alert('Please fill out all required fields.');
    return; // Exit function early if any field is empty
  }

  console.log('Full Name:', fullName);
  console.log('Email:', email);
  console.log('Password:', password);
}