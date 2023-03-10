import React from "react";

const CardQuiz = ({ question }) => {


  return (
    <>
      <div className="card-trivia-container">
        <div className="display-card">
          <h2>Pregunta: </h2>
          {
            question.map((question =>
              <div>
                <h3>{question.question}</h3>
                <div>
                  <input type="checkbox" id="correct" name="correctAnswer" value=""></input>
                  <label htmlFor="" name="correctAnswer">{question.correctAnswer}</label> <br></br>

                  {question.incorrectAnswers.map(incorrect =>
                    <><input type="checkbox" id="incorrect" name="incorrectAnswers" value=""></input>
                      <label htmlFor="" name="incorrectAnswers">{incorrect}</label> <br></br>

                    </>

                  )}
                </div>

              </div>)
            )
          }
        </div>

      </div>

    </>


  )
}

export default CardQuiz;