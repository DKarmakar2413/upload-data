// Handle form submission
document.getElementById("uploadForm").addEventListener("submit", (e) => {
  e.preventDefault();

  // Get inputs
  const imageInput = document.getElementById("imageUpload");
  const textInput = document.getElementById("textInput").value;

  if (imageInput.files.length > 0) {
    const reader = new FileReader();
    reader.onload = function () {
      // Store data in sessionStorage
      sessionStorage.setItem("uploadedImage", reader.result);
      sessionStorage.setItem("uploadedText", textInput);

      // Redirect to the display page
      window.location.href = "display.html";
    };
    reader.readAsDataURL(imageInput.files[0]);
  } else {
    alert("Please upload an image before submitting.");
  }
});

// Display submitted data on the display page
if (window.location.pathname.includes("display.html")) {
  const submittedImage = document.getElementById("submittedImage");
  const submittedText = document.getElementById("submittedText");

  const imageSrc = sessionStorage.getItem("uploadedImage");
  const textContent = sessionStorage.getItem("uploadedText");

  if (imageSrc && textContent) {
    submittedImage.src = imageSrc;
    submittedText.textContent = textContent;
  } else {
    alert("No data found. Please go back and submit the form.");
    window.location.href = "upload.html";
  }
}
