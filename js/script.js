document.addEventListener('DOMContentLoaded', function() {
    const ranges = document.querySelectorAll('input[type="range"]');
    const colorValueElement = document.getElementById('colorValue');
  
    ranges.forEach(function(range) {
      range.addEventListener('input', function() {
        const rValue = document.getElementById('R').value;
        const gValue = document.getElementById('G').value;
        const bValue = document.getElementById('B').value;
        
        const bgColor = 'rgb(' + rValue + ', ' + gValue + ', ' + bValue + ')';
        document.body.style.backgroundColor = bgColor;
  
        // Update the inner text with the new color value
        colorValueElement.textContent = 'background-color: ' + bgColor + ';';
      });
    });
  });
  