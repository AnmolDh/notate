export async function getUser() {
  try {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/user`, {
      credentials: "include",
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
}

export async function getNotes() {
  try {
    const response = await fetch(process.env.REACT_APP_SERVER_URL, {
      credentials: "include",
    });
    response.status === 401 && window.location.replace("/");
    const notes = await response.json();
    return notes;
  } catch (err) {
    console.log(err);
  }
}

export async function postNote(note) {
  try {
    const response = await fetch(process.env.REACT_APP_SERVER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(note),
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
}

export async function deleteNote(id) {
  try {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
}

export async function editNote(id, note) {
  try {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(note),
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
}
