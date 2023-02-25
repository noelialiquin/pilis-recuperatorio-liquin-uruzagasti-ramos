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
        <label>Category</label><br></br>
        <select type="text" name="category" className="drop-cat" onChange={handleInputChange}>
        
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


        <label > Diffculty</label><br></br>
        <input
          type="radio"
          id="d-r1"
          name="difficulty"
          className="radio-form"
          value="easy"
          
          onChange={handleInputChange}
          checked
        />
        <label for="d-r1">Easy</label> <br></br>

        <input
          type="radio"
          id="d-r2"
          name="difficulty"
          className="radio-form"
          value="medium"
          onChange={handleInputChange}
        />
        <label for="d-r2">Medium</label><br></br>

        <input
          type="radio"
          id="d-r3"
          name="difficulty"
          className="radio-form"
          value="hard"
          onChange={handleInputChange}
        />
        <label for="d-r3">Hard</label><br></br>

        <label >Limit</label>
        <input
          type="range"
          name="limit"
          className="rng-limit"
          min="1"
          max="20"
          onChange={handleInputChange}

        />
        <span>{data.limit}</span> 
        <br></br>
        <button type="submit" >Jugar </button>
      </form>


    </>
  )

}
export default FormQuiz;
