import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'
import { Card, CardTitle, CardSubtitle, Row, Table, Button, Alert } from 'reactstrap';
import QuestionBtn from './QuestionBtn'


export default function Question({q, index}) {
  
  const answerArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  const answers = q.question.answers


  const [answerState, setAnswer] = useState('')
  const [answeredState, setAnswered] = useState(true)
  const [correctState, setCorrect] = useState()
  const [countState, setCount] = useState(1)
  
  
  useEffect(() => {
    const correctArr = answers.filter(a => a.correct === true);
    setCount(correctArr.length)
    // console.log(countState)
    console.log(q.question.title+": (Number of Questions " + countState + ")")
    
  })
 
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
    alerter = <Alert color="danger">Wrong</Alert>;;
  }


  return (

          <>
              <Row className={styles.card50}>
                <Card body>

                  <CardTitle tag="h5" key={index}>{q.question.title}</CardTitle>
                  <Table>

                    <tbody>      
                      {answers.map((a, index) =>(
                          <tr>
                            <th scope="row" className={styles.col10}>

                              <QuestionBtn
                                a={a}
                                index={index}
                                handleClick={handleClick}
                                answeredState={answeredState}
                                answerArr={answerArr}
                              />
                              
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
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Choose {countState}: {answerArr[answerState]}</CardSubtitle>
                    <Button onClick={() => submitClick(answers, answerState)} color="primary">Submit</Button>
                    </>
                    : 
                    <></>
                  }
                  {alerter}
                </Card>
            </Row>
          </>
  );
}


