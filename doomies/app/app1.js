const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
    });
  
  const hiddenElements = document.querySelectorAll('.hiddenL');
  const hiddenElements1 = document.querySelectorAll('.hiddenR');
  const hiddenElements2 = document.querySelectorAll('.hiddenLhead');
  const hiddenElements3 = document.querySelectorAll('.hiddenTop');
  hiddenElements.forEach((el) => observer.observe(el));
  hiddenElements1.forEach((el) => observer.observe(el));
  hiddenElements2.forEach((el) => observer.observe(el));
  hiddenElements3.forEach((el) => observer.observe(el));