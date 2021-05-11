import React, { useState } from 'react';
import styles from '../styles/Home.module.css'
import { Card, CardTitle, CardSubtitle, Row, Table, Button } from 'reactstrap';


export default function Question({props}) {
  // Declare a new state variable, which we'll call "count"
  const [answer, setAnswer] = useState('')
  const handleClick = (index) => setAnswer(index)

  const answerArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  
  return (
          <>
            {/* MAPPING THROUGH QUESTIONS */}
            {props.questions.map((q, index) => (
            <div>

              <Row className={styles.card50}>
                <Card body>


                  {/* Display Correct Answer
                  <Alert color="danger">
                    The Correct Answer is "B"
                  </Alert> */}


                  <CardTitle tag="h5" key={index}>{q.question.title}</CardTitle>
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
                                <th scope="row" ><Button className={styles.btnRound} color="primary" onClick={() => handleClick(answerArr[index])} value={index}>{answerArr[index]}</Button></th>
                                <td key={index}>{a.answer}</td>
                              </tr>
                      ))}
                    </tbody>
                  </Table>
                  
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Selected (Choose One): {answer}</CardSubtitle>

                  {/* Submit/ */}
                  <Button color="primary">Submit</Button>{' '}

                </Card>
            </Row>
            </div>
            ))}
          </>
  );
}