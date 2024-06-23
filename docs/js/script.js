document.addEventListener("DOMContentLoaded", function(){
  const profileBtn = document.getElementById('profileBtn')
  const skillBtn = document.getElementById('skillBtn')
  const workBtn = document.getElementById('workBtn')
  const contactBtn = document.getElementById('contactBtn')

  profileBtn.addEventListener('click', function() {
    scrollToAnker('profile')
  })
  skillBtn.addEventListener('click', function() {
    scrollToAnker('skill')
  })
  workBtn.addEventListener('click', function() {
    scrollToAnker('work')
  })
  contactBtn.addEventListener('click', function() {
    scrollToAnker('contact')
  })

  function scrollToAnker(targetId) {
    console.log('click')
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth'});
    }
  }
}, false);
