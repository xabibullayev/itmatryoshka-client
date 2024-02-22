import styles from "./Sidebar.module.css";
import DashboardIcon from "@mui/icons-material/Dashboard";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <h1 className={styles.logo}>IT Matryochka</h1>

      <ul className={styles.list}>
        <li>
          <DashboardIcon className={styles.icon} /> Lidler
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
