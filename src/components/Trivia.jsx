import React from "react";
import { useEffect, useState } from "react";
import FormQuiz from "./FormQuiz";
import CardQuiz from "./CardQuiz";
import { getTrivia } from "../service";


const Trivia = () => {

  const [trivia, setTrivia] = useState();
  const [question, setQuestion] = useState([]);

  function handleChange(data) {
    setTrivia(data);
  }


  useEffect(() => {
    getTrivia(trivia)
      .then((d) =>
        setQuestion(d))
      .catch((err) => console.log(err));
  }, [trivia]);


  return (
    <div>
      <FormQuiz onChangeData={handleChange}></FormQuiz>
      {trivia ? <CardQuiz question={question}></CardQuiz> : "No hay info"}
    </div>

  )
}

export default Trivia;