//function to display messages in an array
function writeCards(names, eventName) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return messages;
  }
  
  writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

  // Function to countdown numbers
  const number = 10;
  function countDown(number) {
    while (number >= 0) {
      return number;
      number--;
    }
  }
  countDown()