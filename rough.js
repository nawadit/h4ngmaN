

  for (let i = 0; i < words.length; i++) {
    const wordArray = words[i];
  
    // Loop over each string in the current array and convert it to uppercase
    for (let j = 0; j < wordArray.length; j++) {
      wordArray[j] = wordArray[j].toUpperCase();
    }
  }