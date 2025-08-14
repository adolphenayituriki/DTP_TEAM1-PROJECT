document.getElementById("role").addEventListener("change", function() {
    const districtDiv = document.getElementById("showDisrict");
    if (this.value === "district") {
      districtDiv.style.display = "block"; // Show district dropdown
    } else {
      districtDiv.style.display = "none"; // Hide district dropdown
    }
  });