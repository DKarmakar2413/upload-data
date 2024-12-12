document.getElementById("uploadForm").addEventListener("submit", (e) => {
  e.preventDefault();

  // Retrieve user input
  const imageInput = document.getElementById("imageUpload");
  const textInput = document.getElementById("textInput").value;

  if (imageInput.files.length > 0) {
    const reader = new FileReader();
    reader.onload = function () {
      // Store data in sessionStorage
      sessionStorage.setItem("uploadedImage", reader.result);
      sessionStorage.setItem("uploadedText", textInput);

      // Redirect to display page
      window.location.href = "display.html";
    };
    reader.readAsDataURL(imageInput.files[0]);
  }
});

// Populate the display page
if (window.location.pathname.includes("display.html")) {
  const submittedImage = document.getElementById("submittedImage");
  const submittedText = document.getElement
