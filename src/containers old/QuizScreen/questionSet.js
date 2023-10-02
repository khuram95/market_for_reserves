import q1 from "../../images/questionIcons/Q1.svg";
import s_1 from "../../images/questionIcons/s-1.svg";

// file name: code name
//scenario = question
// question = subQuestion

const questionSet = [
  {
    questionImage: q1,
    scenarioImage: s_1,
    question:
      "Nothing much happened last year. Inflation was 1% and is expected to stay the same this year.",
    subQuestion:
      "Your salary is $100,000. You are negotiating a potential raise.",
    displayOptions: ["2% automatic raise", "Whatever inflation is"],
    options: ["2% automatic raise", "Whatever inflation is"],
    description:
      "The inflation rate was as expected (1%). You were better off taking the 2% raise ($2,000) than the inflation rate ($1,000).",
    prices: [2000, 1000],
    stringPrices: ["$2,000", "$1,000"],
    correctAnswer: 0, //0 index mean 2000
    actualRate: "1%",
    choseText: "WHICH DO YOU CHOOSE?",
  },
];

export default questionSet;
