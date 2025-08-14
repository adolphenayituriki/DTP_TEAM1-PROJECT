  (function(){
    const container = document.getElementById('signUp');
    const text = container.textContent.trim();
    container.innerHTML = ''; // clear

    // create spans for each letter
    for(let i=0;i<text.length;i++){
      const ch = text[i] === ' ' ? '\u00A0' : text[i];
      const span = document.createElement('span');
      span.className = 'letter';
      span.textContent = ch;
      // stagger timing so shine moves left -> right; store as CSS var
      const delay = (i * 0.12).toFixed(2) + 's';
      span.style.setProperty('--d', delay);
      container.appendChild(span);
    }

    // Sync visual "active" bulbs to the sweep — create a loop that highlights each letter in sequence
    const letters = Array.from(container.querySelectorAll('.letter'));
    let index = 0;
    function loopHighlight(){
      letters.forEach((el, i)=>el.classList.toggle('active', i===index));
      index = (index + 1) % letters.length;
      // faster near middle, slower elsewhere for a lively effect
      const nextDelay = 140; // ms
      setTimeout(loopHighlight, nextDelay);
    }
    // start after a short pause
    setTimeout(loopHighlight, 350);
  })();

function showForm(){
      document.getElementById('form2').style.display = "block"
      document.getElementById('form1').style.display = "none"
}
function showForm2(){
      document.getElementById('form2').style.display = "none"
      document.getElementById('form1').style.display = "block"
}
