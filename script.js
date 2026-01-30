async function loadLearners() {
  const res = await fetch("http://localhost:6000/learners");
  const data = await res.json();

  document.getElementById("learnerList").innerHTML = data.map(l =>
    `<li>
      ${l.name} - ${l.status}
      <button onclick="deleteLearner(${l.id})">Delete</button>
    </li>`
  ).join("");
}

async function addLearner() {
  await fetch("http://localhost:6000/learners", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      status: status.value
    })
  });

  loadLearners();
}

async function deleteLearner(id) {
  await fetch(`http://localhost:6000/learners/${id}`, {
    method: "DELETE"
  });

  loadLearners();
}

loadLearners();
