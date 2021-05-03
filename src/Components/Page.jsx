import Question from "./Question";
import Option from "./Option";
import {useState } from "react";
import { useHistory } from "react-router-dom";

function Page(props) {
  let [score, setScore] = useState(0);
  let [currentIndex, setCurrentIndex] = useState(0);
  const history = useHistory();

  let [userData, setUserData] = useState([]);

let userDataCopy;
  function checkAns(index) {
    userDataCopy = JSON.parse(JSON.stringify(userData));

    userDataCopy.push([
      questionObj[currentIndex].question,
      questionObj[currentIndex].correctOption,
      index,
      questionObj[currentIndex].answers[
        questionObj[currentIndex].correctOption
      ],
      questionObj[currentIndex].answers[index],
    ]);
   
   setUserData(userDataCopy)
console.log(userData)
    if (currentIndex < questionObj.length - 1) {
      setTimeout(() => setCurrentIndex(currentIndex + 1), 500);
      if (questionObj[currentIndex].correctOption === index) {
        setScore(score + 1);
        return "green";
      } else {
        return "red";
      }
    } 
    
    else {
      setTimeout(
        () => history.push({ pathname: "/result", state: { userDataCopy } }),
        2000
      );
      if (questionObj[currentIndex].correctOption === index) {
        setScore(score + 1);
        return "green";
      } else {
        return "red";
      }
    }
  }
  // useEffect(() => { setUserData(userDataCopy) },[userDataCopy])
  let questionObj = [
    {
      question: "Who is the Prime Minister of 1?",
      answers: [
        "Donald Trump",
        "Narendra Modi",
        "Barack Obama",
        "Mukesh ambani",
      ],
      correctOption: 1,
    },

    {
      question: "Who is the Prime Minister of 2?",
      answers: [
        "Donald Trump2",
        "Narendra Modi2",
        "Barack Obama2",
        "Mukesh ambani2",
      ],
      correctOption: 1,
    },
    {
      question: "Who is the Prime Minister of 3?",
      answers: [
        "Donald Trump3",
        "Narendra Modi3",
        "Barack Obama3",
        "Mukesh ambani3",
      ],
      correctOption: 1,
    },
    {
      question: "Who is the Prime Minister of 4?",
      answers: [
        "Donald Trump4",
        "Narendra Modi4",
        "Barack Obama4",
        "Mukesh ambani4",
      ],
      correctOption: 1,
    },
    {
      question: "Who is the Prime Minister of 5?",
      answers: [
        "Donald Trump5",
        "Narendra Modi5",
        "Barack Obama5",
        "Mukesh ambani5",
      ],
      correctOption: 1,
    },
  ];

  return (
    <>
      <div className="container">
        <div className="score">Score : {score}</div>

        <Question value={questionObj[currentIndex].question} />

        <div className="options">
          {questionObj[currentIndex].answers.map((choice, index) => {
            return (
              <Option
                value={choice}
                index={index}
                clickHandler={checkAns}
                key={currentIndex + "" + index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Page;
