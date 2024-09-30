import React, { useState } from 'react';
import axios from 'axios'






const QuestionBox = () => {
  const [question, setQuestion] = useState('');

  const [answer, setAnswer] = useState('')

  // const handleInputChange = (e) => {
  //   setQuestion(e.target.value);
  // };
  async function genrateAnswer(){
    // setAnswer("..loading")
    const response = await axios({
      url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAX9otrHm5pr4RK15Df7txA9NA87EPsjVY",
      method:"post",
      data:{
        "contents":
        [
          {"parts":[
            {"text":question}
          ]
        }
      ]
    }
      
    })
    setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text']); 
  }
  
  

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (question.trim()) {
  //     console.log("Question Submitted:", question);
  //     setQuestion(question); // Reset the input after submission
  //   }
  // };

  return (
    <>
    <div className="flex justify-center items-center w-screen">
      <form  className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-semibold mb-4 text-center">Ask a Question</h1>
        <div className="mb-4">
          <textarea
            value={question}
            onChange={(e) => e.target.value}
            placeholder="Type your question here..."
            className="w-full h-32 p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={genrateAnswer}
        >
          Submit
        </button>
      </form>
    </div>
    <div className=''>
    <pre>
      {answer}
    </pre>
    </div>
    </>
  );
};

export default QuestionBox;
