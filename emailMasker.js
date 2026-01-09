const maskEmail = (email) => {
  const [localPart, domain] = email.split("@");
  const firstLetter = localPart[0];
  const finalLetter = localPart[localPart.length - 1];
  const numOfAsterisks = localPart.length - 2;
  const maskedEmail = `${firstLetter}${"*".repeat(numOfAsterisks)}${finalLetter}`;
  return `${maskedEmail}@${domain}`;
};
let email="";
email = "apple.pie@example.com";
console.log(maskEmail(email));
email = "freecodecamp@example.com";
console.log(maskEmail(email));
email = "info@test.dev";
console.log(maskEmail(email));
email = "user@domain.org";
console.log(maskEmail(email));