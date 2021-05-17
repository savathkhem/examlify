import React, { useEffect } from 'react';
import styles from '../styles/Home.module.css'
import { Button } from 'reactstrap';


export default function Question({a, index, answeredState, handleClick, answerArr, setCount, countState}) {

    const correct= a.correct

// Render button base on answered & correct
    let button;
    if (answeredState == true && correct == false) {
        button = <Button className={styles.btnRound} outline color="primary" onClick={() => handleClick(index)} value={index}>{answerArr[index]}</Button>
    } 
    if (answeredState == true && correct == true) {
        button = <Button className={styles.btnRound} outline color="primary" onClick={() => handleClick(index)} value={index}>{answerArr[index]}</Button>
    } 
    if (answeredState == false && correct == false) {
        button = <Button disabled={true} className={styles.btnRound} outline color="danger" onClick={() => handleClick(index)} value={index}>{answerArr[index]}</Button>
    }
    if (answeredState == false && correct == true) {
        button = <Button disabled={true} className={styles.btnRound} color="success" onClick={() => handleClick(index)} value={index}>{answerArr[index]}</Button>
    }

  return (

          <>  
          {button}                                          
          </>
  );
}


