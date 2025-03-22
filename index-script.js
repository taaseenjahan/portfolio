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

// Set the default tab to "Home" on page load
window.onload = function() {
  // Trigger a click on the "Home" tab button
  document.getElementById("defaultOpen").click();
};

// Log to ensure script is loaded
console.log("cae-script.js is loaded");

// Function to open nested tabs inside the CAE page (Windmill Design, Turducken Design)
function openNestedTab(evt, tabName) {
  console.log("Opening nested tab:", tabName);  // Log which tab is being clicked

  var i, nestedTabcontent, nestedTablinks;

  // Hide all nested tab content
  nestedTabcontent = document.getElementsByClassName("nested-tabcontent");
  for (i = 0; i < nestedTabcontent.length; i++) {
    nestedTabcontent[i].style.display = "none";
  }

  // Remove the active class from all nested tab buttons
  nestedTablinks = document.getElementsByClassName("nested-tablinks");
  for (i = 0; i < nestedTablinks.length; i++) {
    nestedTablinks[i].className = nestedTablinks[i].className.replace(" active", "");
  }

  // Display the clicked nested tab content
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";

  // Dynamically load content for the nested tab
  loadNestedTabContent(tabName);
}

// Function to load content for nested tabs (Windmill Design, Turducken Design)
function loadNestedTabContent(tabName) {
  var contentUrl = tabName.toLowerCase();  // Get the lowercase tab name (e.g., windmill, turducken)
  contentUrl = `/portfolio/cae/${contentUrl}/${contentUrl}.html`;  // Path to the external HTML file
  
  console.log('Fetching content for:', contentUrl);  // Log the URL being fetched

  // Fetch the content from the external HTML file
  fetch(contentUrl)
    .then(response => {
      // Check if the response is OK (status code 200)
      if (!response.ok) {
        throw new Error('Content not found');
      }
      return response.text();
    })
    .then(data => {
      // Insert the fetched content into the tab
      console.log("Fetched content for:", tabName);
      document.getElementById(tabName).innerHTML = data;
    })
    .catch(error => {
      console.error('Error loading the nested content:', error);
      // Provide fallback content in case of an error
      document.getElementById(tabName).innerHTML = "<p>Sorry, we couldn't load the nested content.</p>";
    });
}

// Function to load content for nested tabs (Windmill Design, Turducken Design)
function loadNestedTabContent(tabName) {
  var contentUrl = tabName.toLowerCase();  // Get the lowercase tab name (e.g., windmill, turducken)
  contentUrl = `/portfolio/cae/${contentUrl}/${contentUrl}.html`;  // Path to the external HTML file
  
  console.log('Fetching content for:', contentUrl);  // Log the URL being fetched

  // Fetch the content from the external HTML file
  fetch(contentUrl)
    .then(response => {
      // Check if the response is OK (status code 200)
      if (!response.ok) {
        throw new Error('Content not found');
      }
      return response.text();
    })
    .then(data => {
      // Insert the fetched content into the tab
      console.log("Fetched content for:", tabName);
      document.getElementById(tabName).innerHTML = data;
    })
    .catch(error => {
      console.error('Error loading the nested content:', error);
      // Provide fallback content in case of an error
      document.getElementById(tabName).innerHTML = "<p>Sorry, we couldn't load the nested content.</p>";
    });
}

// Function to open a nested tab and display the corresponding content
function openNestedTab(evt, tabName) {
  var i, nestedTabcontent, nestedTablinks;

  // Hide all nested tab content
  nestedTabcontent = document.getElementsByClassName("nested-tabcontent");
  for (i = 0; i < nestedTabcontent.length; i++) {
    nestedTabcontent[i].style.display = "none";
  }

  // Remove the active class from all nested tab buttons
  nestedTablinks = document.getElementsByClassName("nested-tablinks");
  for (i = 0; i < nestedTablinks.length; i++) {
    nestedTablinks[i].className = nestedTablinks[i].className.replace(" active", "");
  }

  // Display the clicked nested tab content
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";

  // Dynamically load the content from the external HTML file for the clicked tab
  loadNestedTabContent(tabName);
};