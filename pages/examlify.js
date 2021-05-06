import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react';
import { Card, CardTitle, CardSubtitle, Row, Table, Button, Alert, Progress, Col } from 'reactstrap';
import content from "../examlify.content.json";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Row>

        <Col className={styles.rowTop5}>
            <Card body className={styles.card50}>
              <CardTitle tag="h5">{content.pages[0].questions[0].question.title}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Choose one: </CardSubtitle>
              <Table hover>
                <thead>
                  <tr>
                    <th className={styles.col10}>#</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">A</th>
                    <td>{content.pages[0].questions[0].question[0].answers[0].answer}</td>
                  </tr>
                  <tr>
                    <th scope="row">B</th>
                    <td>{content.pages[0].questions[0].question[0].answers[1].answer}</td>
                  </tr>
                  <tr>
                    <th scope="row">C</th>
                    <td>{content.pages[0].questions[0].question[0].answers[2].answer}</td>
                  </tr>
                  <tr>
                    <th scope="row">D</th>
                    <td>{content.pages[0].questions[0].question[0].answers[3].answer}</td>
                  </tr>
                </tbody>
              </Table>
              {/*  Display Correct Answer */}
              <Alert color="danger">
                The Correct Answer is "B"
              </Alert>
              {/* Submit/ */}
              <Button color="primary">Submit</Button>{' '}
            </Card>
          </Col>

          <Col className={styles.rowTop5}>
            <Card body className={styles.card50}>
              <CardTitle tag="h5">{content.pages[0].questions[1].question}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Choose one: </CardSubtitle>
              <Table hover>
                <thead>
                  <tr>
                    <th className={styles.col10}>#</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">A</th>
                    <td>{content.pages[0].questions[1].answers[0].answer}</td>
                  </tr>
                  <tr>
                    <th scope="row">B</th>
                    <td>{content.pages[0].questions[1].answers[1].answer}</td>
                  </tr>
                  <tr>
                    <th scope="row">C</th>
                    <td>{content.pages[0].questions[1].answers[2].answer}</td>
                  </tr>
                  <tr>
                    <th scope="row">D</th>
                    <td>{content.pages[0].questions[1].answers[3].answer}</td>
                  </tr>
                </tbody>
              </Table>
              {/*  Display Correct Answer */}
              <Alert color="danger">
                The Correct Answer is "B"
              </Alert>
              {/* Submit/ */}
              <Button color="primary">Submit</Button>{' '}
            </Card>
          </Col>



        </Row>
      </main>

      <footer className={styles.footer}>
        {/* Progress Section */}
        <Col>
          <Row>
            <Col className={styles.rowTop5}>
              <Progress multi>
                <Progress striped bar color="success" value="50" />
                <Progress striped bar color="danger" value="20" />
              </Progress>
            </Col>
          </Row>
        </Col>
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
