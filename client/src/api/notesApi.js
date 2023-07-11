export function getNotes() {
  return fetch(process.env.REACT_APP_SERVER_URL, {
    headers: {
      "Authorization": `Bearer ${process.env.REACT_APP_SERVER_AUTH_TOKEN}`
    }
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.log(err));
}

export function postNote(note) {
  return fetch(process.env.REACT_APP_SERVER_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.REACT_APP_SERVER_AUTH_TOKEN}`,
    },
    body: JSON.stringify(note),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
}

export function deleteNote(id) {
  return fetch(`${process.env.REACT_APP_SERVER_URL}${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.REACT_APP_SERVER_AUTH_TOKEN}`,
    },
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
}

export function editNote(id, note) {
  return fetch(`${process.env.REACT_APP_SERVER_URL}${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.REACT_APP_SERVER_AUTH_TOKEN}`,
    },
    body: JSON.stringify(note),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
}
