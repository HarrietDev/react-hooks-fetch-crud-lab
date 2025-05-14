import React from "react";

function QuestionItem({ question, onDeleteQuestion  }) {
  const { id, prompt, answers, correctIndex } = question;

  // const options = answers.map((answer, index) => (
  //   <option key={index} value={index}>
  //     {answer}
  //   </option>
  // ));
  const options = Array.isArray(answers)
  ? answers.map((answer, index) => (
      <option key={index} value={index}>
        {answer}
      </option>
    ))
  : [];

  const handleDeleteClick = () => {
    fetch (`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    })
    .then ((r) => {
      if (r.ok) {
        onDeleteQuestion(id) //update state in parent
      }
    })
  }


  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
