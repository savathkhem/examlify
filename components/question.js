import React, { useState } from 'react';
import styles from '../styles/Home.module.css'
import { Card, CardTitle, CardSubtitle, Row, Table, Button } from 'reactstrap';


export default function Question({q, index}) {
  
  // Declare a new state variable, which we'll call "count"
  const [answerState, setAnswer] = useState('')
  const [answeredState, setAnswered] = useState(true)
  const handleClick = (e) => setAnswer(e)
  const answerArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  // submit button:  Check if answerState is == true
  const submitClick = (q, i) => {
    let correct = q.question.answers[i].correct
    // console.log(q.question.answers[i].correct)
    if (correct == true) {
      alert('yasss')
    } else alert('noo');
    setAnswered(false)
    console.log('You answer has been submitted')
  }

  return (

          <>
              <Row className={styles.card50}>
                <Card body>

                  {/* Display Correct Answer
                  <Alert color="danger">
                    The Correct Answer is "B"
                  </Alert> */}

                  <CardTitle tag="h5" key={index}>{q.question.title}</CardTitle>
                  <Table hover>
                    {/* <thead>
                      <tr>
                        <th className={styles.col10}>#</th>
                        <th>Description</th>
                      </tr>
                    </thead> */}
                    <tbody>      
                      {q.question.answers.map((a, index) =>(
                          <tr>
                            <th scope="row" className={styles.col10}><Button className={styles.btnRound} color="primary" onClick={() => handleClick(index)} value={index}>{answerArr[index]}</Button></th>
                            <td key={index}>{a.answer}</td>
                          </tr>
                      ))}
                    </tbody>
                  </Table>
                  
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Selected (Choose One): {answerArr[answerState]}</CardSubtitle>

                  {/* Submit/ */}
                  {answeredState
                    ? <Button onClick={() => submitClick(q, answerState)} color="primary">Submit</Button>
                    : <Button color="secondary">Submitted</Button>
                  }
                  {/* <Button onClick={() => submitClick(q, answerState)} color="primary">Submit</Button>{' '} */}

                </Card>
            </Row>
          </>
  );
}