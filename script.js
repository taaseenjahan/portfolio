// Function to open a tab and load content from external HTML files
function openLink(evt, pageName) {
    var i, tabcontent, tablinks;
    
    // Hide all tab content
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the active class from all tab buttons
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Display the clicked tab content
    document.getElementById(pageName).style.display = "block";
    evt.currentTarget.className += " active";
  
    // Dynamically load content from external file based on the city
    loadTabContent(pageName);
  }
  
  // Function to load tab content from an external file
  function loadTabContent(pageName) {
    var contentUrl = pageName.toLowerCase();
    contentUrl = `/portfolio/${contentUrl}/${contentUrl}.html`;  
    fetch(contentUrl)
      .then(response => response.text())
      .then(data => {
        document.getElementById(pageName).innerHTML = data;
      })
      .catch(error => {
        console.error('Error loading the content:', error);
        document.getElementById(pageName).innerHTML = "<p>Sorry, we couldn't load the content.</p>";
      });
  }