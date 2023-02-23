import React from "react";
import { useState } from "react";

const FormQuiz = ({ onChangeData }) => {
  const [data, setData] = useState({
    category: "",
    difficulty: "",
    limit: ""
  });


  const handleInputChange = (event) => {

    setData({
      ...data,
      [event.target.name]: event.target.value

    })
  }

  const dataTrivia = (event) => {
    event.preventDefault();
    onChangeData(data);


  }

  return (
    <>
      <h1>TRIVIA</h1>
      <form onSubmit={dataTrivia}>
        <label>Categoria</label><br></br>
        <select type="text" name="category" className="drop-cat" onChange={handleInputChange}>
          <option value="">-- Elija una opcion --</option>
          <option value="arts_and_literature">Arts & Literature</option>
          <option value="film_and_Tv">Film & TV</option>
          <option value="food_and_drink">Food & Drink</option>
          <option value="general_knowledge">General Knowledge</option>
          <option value="geography">Geography</option>
          <option value="history">History</option>
          <option value="music">Music</option>
          <option value="science">Science</option>
          <option value="society_and_culture">Society & Culture</option>
          <option value="sport_and_Leisure">Sport & Leisure</option>
        </select>


        <label>Dificultad</label><br></br>
        <input
          type="radio"
          name="difficulty"
          className="rad_1"
          value="easy"
          onChange={handleInputChange}

        />
        <label>Easy</label> <br></br>

        <input
          type="radio"
          name="difficulty"
          className="rad_1"
          value="medium"
          onChange={handleInputChange}
        />
        <label>Medium</label><br></br>

        <input
          type="radio"
          name="difficulty"
          className="rad_1"
          value="hard"
          onChange={handleInputChange}
        />
        <label>Hard</label><br></br>

        <label ></label>
        <input
          type="range"
          name="limit"
          className="limit"
          min="1"
          max="20"
          onChange={handleInputChange}

        />
        <button type="submit" >Jugar </button>
      </form>


    </>
  )

}
export default FormQuiz;
