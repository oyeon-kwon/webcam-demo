import styles from "./page.module.css";
import { BarcodeScanner } from "./BarcodeScanner";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <BarcodeScanner />
      </div>
    </main>
  );
}
