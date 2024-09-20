function navigateToPage() {
    var selectedOption = document.getElementById("searchType").value;
    if (selectedOption) {
      window.location.href = selectedOption; // Redirect to the selected option's value (URL)
    }
  }
  
