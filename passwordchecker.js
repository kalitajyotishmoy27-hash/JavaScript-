function checkPassword(passwords) {
  const correct = "1234";
  let i = 0;

  if (passwords.length === 0) return "Password Failed";

  do {
    if (passwords[i] === correct) {
      return "Password is Correct";
    }
    i++;
  } while (i < passwords.length);

  return "Password is Failed";
}

console.log(checkPassword(["1234"]))        