import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Graph from '../components/Graph';
import React, { useState } from 'react'
import Link from 'next/link';
// Note to self: Home({answer}) gives access to the answer prop.
export default function Home() {

  try{
    const data = fetch('/api/hello',
      { method: 'POST', body: JSON.stringify({"id": 10 })});
  } catch(e) {
    console.log(e);
    throw e;
  }
  return (
    <div className={styles.container}>
      <Graph />
    </div>
  )
}
