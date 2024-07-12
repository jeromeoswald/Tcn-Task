document.getElementById('countButton').addEventListener('click', function() {
    var inputText = document.getElementById('inputText').value.trim();
    var words = inputText.toLowerCase().match(/\b\w+\b/g);
    
    if (!words) {
      alert('Please enter a valid sentence.');
      return;
    }
    
    var wordMap = {};
    words.forEach(function(word) {
      if (word in wordMap) {
        wordMap[word]++;
      } else {
        wordMap[word] = 1;
      }
    });
    
    var mostOccurredWord = '';
    var maxOccurrences = 0;
    
    for (var word in wordMap) {
      if (wordMap[word] > maxOccurrences) {
        mostOccurredWord = word;
        maxOccurrences = wordMap[word];
      }
    }
    
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = `<p>Most occurred word: "${mostOccurredWord}", Occurrences: ${maxOccurrences}</p>`;
  });
  