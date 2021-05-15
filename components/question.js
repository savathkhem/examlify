import React, { useState } from 'react';
import styles from '../styles/Home.module.css'
import { Card, CardTitle, CardSubtitle, Row, Table, Button, Alert } from 'reactstrap';


export default function Question({q, index}) {
  
  const answerArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  const answers = q.question.answers


  const [answerState, setAnswer] = useState('')
  const [answeredState, setAnswered] = useState(true)
  const [correctState, setCorrect] = useState()


  const handleClick = (e) => setAnswer(e)

  // submit button:  Check if answerState is == true
  const submitClick = (answers, i) => {
    let correct = answers[i].correct
    // console.log(q.question.answers[i].correct)
    if (correct == true) {
      setCorrect(true);
      // alert('yasss')
    } else setCorrect(false);
    setAnswered(false)
    console.log('You answer has been submitted')
  }


// RENDER CONDITIONAL COMPONENTS
  let alerter;
  if (correctState == true) {
    alerter = <Alert color="success">Correct!</Alert>;
  } 
  if (correctState == false) {
    alerter = <Alert color="danger">Wrong...  The answer is "XX"</Alert>;;
  }

  let button;
  



  return (

          <>
              <Row className={styles.card50}>
                <Card body>

                  <CardTitle tag="h5" key={index}>{q.question.title}</CardTitle>
                  <Table hover>

                    {/* <thead>
                      <tr>
                        <th className={styles.col10}>#</th>
                        <th>Description</th>
                      </tr>
                    </thead> */}

                    <tbody>      
                      {answers.map((a, index) =>(
                          <tr>
                            <th scope="row" className={styles.col10}>

                              <Button className={styles.btnRound} outline color="primary" correct={a.correct} onClick={() => handleClick(index)} value={index}>{answerArr[index]}</Button>

                              </th>
                            <td key={index}>{a.answer}</td>
                          </tr>
                      ))}
                    </tbody>
                  </Table>

                  {/* Submit/ */}
                  {answeredState
                    ? 
                    <>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Selected (Choose One): {answerArr[answerState]}</CardSubtitle>
                    <Button onClick={() => submitClick(answers, answerState)} color="primary">Submit</Button>
                    </>
                    : 
                    <>
                    </>
                  }
                  {alerter}
                </Card>
            </Row>
          </>
  );
}


