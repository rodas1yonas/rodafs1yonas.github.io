const navToggle = document.querySelector(".navbar_toggle");
    const links = document.querySelector(".main_nav");
    navToggle.addEventListener('click', function(){
        links.classList.toggle("show_nav");
    })

     function myFunction() {
    document.getElementById("dropdowns").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.scope')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }