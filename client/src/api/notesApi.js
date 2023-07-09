export function getNotes() {
  return fetch("http://localhost:4000/")
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.log(err));
}

export function postNote(note) {
  return fetch("http://localhost:4000/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(note),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
}

export function deleteNote(delID) {
  return fetch("http://localhost:4000/", { method: "DELETE", body: { id: delID } })
    .then((response) => response.json())
    .catch((err) => console.log(err));
}
