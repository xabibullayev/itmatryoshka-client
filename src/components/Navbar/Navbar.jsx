import styles from "./Navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div>
        <MenuIcon />
      </div>
    </div>
  );
}

export default Navbar;
