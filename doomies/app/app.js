window.addEventListener('load', function() {
    
    var welcomePage = document.getElementById('welcome-page');
    
    var mainPage = document.getElementById('main-page');
    
    document.body.style.overflow = 'hidden';

    setTimeout(function() {
        welcomePage.classList.add('fade-out');
        
        document.body.style.overflow = 'auto';
       
        mainPage.style.display = 'block';
      }, 3000);
    

    
    setTimeout(function() {
      mainPage.classList.add('fade-in');
    }, 3050);
    
  });

