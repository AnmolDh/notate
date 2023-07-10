export function getNotes() {
  return fetch(process.env.REACT_APP_BACKEND_URL)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.log(err));
}

export function postNote(note) {
  return fetch(process.env.REACT_APP_BACKEND_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(note),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
}

export function deleteNote(id) {
  return fetch(`${process.env.REACT_APP_BACKEND_URL}${id}`, { method: "DELETE" })
    .then((response) => response.json())
    .catch((err) => console.log(err));
}

export function editNote(id, note) {
  return fetch(`${process.env.REACT_APP_BACKEND_URL}${id}`, {
    method: "PUT",
    body: JSON.stringify(note),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
}
