"use client";
import styles from "./page.module.css";
import Sidebar from "@/components/Sidebar/Sidebar";
import Navbar from "@/components/Navbar/Navbar";
import DataTable from "@/components/DataTable/DataTable";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [lids, setLids] = useState([]);

  useEffect(() => {
    const fetchLids = async () => {
      await axios
        .get(`http://185.217.131.28:5000/api/lids`)
        .then((res) => setLids(res.data))
        .catch((err) => console.log(err));
    };

    fetchLids();
  }, []);

  return (
    <div className={styles.home}>
      <Sidebar />

      <div className={styles.right}>
        <Navbar />

        <div className={styles.main}>
          <h1>Kursqa jazilganlar</h1>

          <DataTable rows={lids} />
        </div>
      </div>
    </div>
  );
}
