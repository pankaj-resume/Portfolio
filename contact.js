<script>
function addReview() {
  let name = document.getElementById("name").value;
  let rating = document.getElementById("rating").value;
  let message = document.getElementById("message").value;

  if(name === "" || rating === "" || message === "") {
    alert("Please fill all fields");
    return;
  }
  let stars = "⭐".repeat(rating);

  let reviewHTML = `
    <div class="rating-card">
      <h3>${stars}</h3>
      <p>${message}</p>
      <p><b>- ${name}</b></p>
    </div>
  `;

  document.getElementById("reviews").innerHTML += reviewHTML;

  // Reset form
  document.getElementById("name").value = "";
  document.getElementById("rating").value = "";
  document.getElementById("message").value = "";
  
}
</script>