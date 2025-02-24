import Image from "next/image";
import styles from "./page.module.css";
import Calculator from '../components/Calculator';

export default function Home() {
  return (
    <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Calculator />
    </main>
  );
}
