import axios from "axios";

export async function getUser() {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/user`,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function getNotes() {
  try {
    const response = await axios.get(process.env.REACT_APP_SERVER_URL, {
      withCredentials: true,
    });
    response.status === 401 && window.location.replace("/");
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function postNote(note) {
  try {
    const response = await axios.post(process.env.REACT_APP_SERVER_URL, note, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function deleteNote(id) {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_SERVER_URL}/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function editNote(id, note) {
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_SERVER_URL}/${id}`,
      note,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
