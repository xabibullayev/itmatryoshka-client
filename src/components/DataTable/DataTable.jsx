import { useState } from "react";
import styles from "./DataTable.module.css";
import axios from "axios";
import SaveIcon from "@mui/icons-material/Save";

function DataTable({ rows }) {
  const [loading, setLoading] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [status, setStatus] = useState("");
  const [rowId, setRowId] = useState("");

  const handleClick = (id) => {
    setIsClick(true);
    setRowId(id);
  };

  const submitHandler = async (e, id) => {
    setLoading(true);
    e.preventDefault();

    await axios
      .put(`http://185.217.131.28:5000/api/lids/${id}`, {
        status: status,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    setIsClick(false);
    setLoading(false);
  };

  console.log(status);

  if (setLoading === true) {
    return (
      <div style={{ width: "100vw", height: "100vh" }}>
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <table>
          <thead>
            <tr>
              <td className={styles.tab}>FIO</td>
              <td>Telefon nomeri</td>
              <td>Username</td>
              <td>Kurs</td>
              <td>Gruppa/Individual</td>
              <td>Online/Offline</td>
              <td>Kun</td>
              <td>Waqti</td>
              <td>Sane</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            {rows?.map((row) => (
              <tr key={row?._id}>
                <td className={styles.tab}>
                  {row?.firstname} {row?.lastname}
                </td>
                <td>{row.phone}</td>
                <td>{row.username}</td>
                <td>{row.name}</td>
                <td>{row.group}</td>
                <td>{row.type}</td>
                <td>{row.day}</td>
                <td>{row.time}</td>
                <td>{new Date(row?.date).toLocaleDateString()}</td>
                <td>
                  <form onSubmit={(e) => submitHandler(e, row._id)}>
                    <input
                      type="text"
                      onFocus={() => handleClick(row._id)}
                      defaultValue={row.status}
                      onChange={(e) => setStatus(e.target.value)}
                    />
                    {isClick && rowId === row._id && (
                      <button>
                        <SaveIcon />
                      </button>
                    )}
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DataTable;
