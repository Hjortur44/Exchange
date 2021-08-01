import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Graph from '../components/Graph';

export default function Home() {
  return (
    <div className={styles.container}>
      <Graph />
    </div>
  )
}
