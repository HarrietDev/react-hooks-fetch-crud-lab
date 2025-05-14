import React from "react";
import QuestionItem from "./QuestionItem"
function QuestionList({questions, setQuestions}) {
  function handleDeleteQuestion(deletedId) {
    const updateQuestions = questions.filter((q) => q.id !==deletedId)
    setQuestions(updateQuestions);
  }
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul> 
        { questions.map((question) => 
      (<QuestionItem 
        key={question.id} 
        question={question}
        onDeleteQuestion={handleDeleteQuestion}/>
      ))}
      </ul> 
    </section>
  );
}

export default QuestionList;
