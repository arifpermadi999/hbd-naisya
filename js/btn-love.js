 // Graceful click handler (compatible with autoplay restrictions)
    const btn = document.getElementById('turn_on');
    btn.addEventListener('click', function(){
      // toggle active look
      btn.classList.toggle('active');

      // change label text briefly
      const line1 = btn.querySelector('.line1');
      const line2 = btn.querySelector('.line2');

      if(btn.classList.contains('active')){
        line1.textContent = 'STARTED';
        line2.textContent = 'Love is awake';
      } else {
        line1.textContent = 'START';
        line2.textContent = 'Touch to begin the surprise';
      }

      // Dispatch original jQuery-style event for compatibility with existing code
      const clickEvent = new Event('click', { bubbles: true, cancelable: true });
      btn.dispatchEvent(clickEvent);

      // Optionally you can play a short sound *if* user-initiated - keep commented to avoid autoplay issues
      // const audio = new Audio('data:audio/mp3;base64,...'); audio.play();
    });