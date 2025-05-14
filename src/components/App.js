import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);
  
  // Fetch questions once when component mounts
  useEffect(() =>{
    fetch("http://localhost:4000/questions")
    .then((r) => r.json())
    .then((data) => 
      setQuestions(data))
  }, []);

  function handleAddedQuestion(newQuestion){
    setQuestions ( (prevQuestions)=>[...prevQuestions, newQuestion])
  }


  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? 
      <QuestionForm  setQuestions={setQuestions} onAddQuestion={handleAddedQuestion}/> : 
      <QuestionList  questions={questions} setQuestions={setQuestions}/>}
    </main>
  );
}

export default App;
