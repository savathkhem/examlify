import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react';
import Test from '../components/test'
import Clock from '../components/clock'
import Range from '../components/range'
import Test1 from '../components/test1'
import UserList from '../components/userList'

// import { Card, CardTitle, CardSubtitle, Row, Table, Button, Alert, Progress, Col } from 'reactstrap';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        {/* <Clock />
        
        <Test />

        <Clock />

        <Range /> */}

        {/* <Test1 /> */}

        <UserList />



      </main>

      <footer className={styles.footer}>
        {/* Progress Section */}
        {/* <Col>
          <Row>
            <Col className={styles.rowTop5}>
              <Progress multi>
                <Progress striped bar color="success" value="50" />
                <Progress striped bar color="danger" value="20" />
              </Progress>
            </Col>
          </Row>
        </Col> */}
        {/* <Col>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </Col> */}
      </footer>
    </div>
  )
}
