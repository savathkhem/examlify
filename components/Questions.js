import React from 'react';
import Question from './Question'


export default function Questions({page}) {
  
  return (
          <>
            {/* MAPPING THROUGH QUESTIONS */}
            {page.questions.map((q, index) => (
            <div>
              <Question
              q={q}
              index={index}
              />
            </div>
            ))}
          </>
  );
}