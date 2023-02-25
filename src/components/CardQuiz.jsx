import React from "react";
import { useState } from "react";

const CardQuiz = ({ question }) => {

  const [puntuacion, setPuntuación] = useState(0);
  const [areDisabled, setAreDisabled] = useState(false);


    const handleAnswerSubmit = (correctAnswer, e)=> {
    if (correctAnswer) setPuntuación(puntuacion + 1);
     
    }


    return(
      <>
        <div className="card-trivia-container">
          <div className="display-card">

        {question.map((question =>
           <div>
             <h3>{question.question}</h3>
             <div>
                  <button disabled={areDisabled} key={question.correctAnswer} onClick={(e) => handleAnswerSubmit(question.correctAnswer, e)}>
                  {question.correctAnswer}
                    </button>
                    <br></br>

                  {question.incorrectAnswers.map(incorrect =>
                  
                  <>  <button disabled={areDisabled} key={incorrect} >
                     {incorrect}
                    </button>              </>    
                  )
                  } 
                  
                  <br></br>
                </div>

                
              </div>
              
              )


              )

              
              }
                    {question ? <span> Puntuacion {puntuacion} de {question.length}</span> : " "}

          </div>
         
        </div>
      
      </>
  
  
    )
  }
  
  export default CardQuiz;