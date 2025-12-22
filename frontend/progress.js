function saveProfile() {
    console.log("🟢 saveProfile() called");

    const name = document.getElementById("name").value;

    fetch("http://localhost:3000/save-profile", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        alert("Saved!");
    })
    .catch(err => console.error(err));
}
