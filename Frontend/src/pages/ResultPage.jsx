import { useContext } from "react";

import { QuizContext }
from "../context/QuizContext";

const ResultPage = () => {

 const { careerScores }
 =
 useContext(
  QuizContext
 );

 return (

  <div className="p-10">

   <h1
    className="
    text-4xl
    font-bold
    mb-6
    "
   >
    Your Career Results
   </h1>

   <pre>

    {
     JSON.stringify(
      careerScores,
      null,
      2
     )
    }

   </pre>

  </div>

 );

};

export default ResultPage;