import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css'
import { Card, CardTitle, CardSubtitle, Row, Table, Button, Alert, Progress, Col } from 'reactstrap';


// STATE:
// NUMBER OF QUESTIONS, CORRECT, INCORRECT, SKIP



export default function Question({props}) {
  return (
      <>
        {/* MAPPING THROUGH QUESTIONS */}
        {props.questions.map((q, index) => (
        <div>
          <Row className={styles.card50}>
            <Card body>
              <CardTitle tag="h5" key={index}>{q.question.title}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Choose one: </CardSubtitle>
              <Table hover>
                <thead>
                  <tr>
                    <th className={styles.col10}>#</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>      
                  {q.question.answers.map((a, index) =>(
                          <tr>
                            <th scope="row">{index}</th>
                            <td key={index}>{a.answer}</td>
                          </tr>
                  ))}
                </tbody>
              </Table>

              {/*  Display Correct Answer */}
              <Alert color="danger">
                The Correct Answer is "B"
              </Alert>

              {/* Submit/ */}
              <Button color="primary">Submit</Button>{' '}

            </Card>
        </Row>
        </div>
        ))}
      </>
  );
}