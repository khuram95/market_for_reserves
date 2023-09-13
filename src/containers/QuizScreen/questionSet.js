import q1 from "../../images/questionIcons/Q1.svg";
import q2 from "../../images/questionIcons/q2.svg";
import q3 from "../../images/questionIcons/q3.svg";
import q4 from "../../images/questionIcons/q4.svg";
import q5 from "../../images/questionIcons/q5.svg";
import q6 from "../../images/questionIcons/q6.svg";
import q7 from "../../images/questionIcons/q7.svg";
import q8 from "../../images/questionIcons/q8.svg";
import q9 from "../../images/questionIcons/q9.svg";
import q10 from "../../images/questionIcons/q10.svg";

import s_1 from "../../images/questionIcons/s-1.svg";
import s_2 from "../../images/questionIcons/s-2.svg";
import s_3 from "../../images/questionIcons/s-3.svg";
import s_4 from "../../images/questionIcons/s-4.svg";
import s_5 from "../../images/questionIcons/s-5.svg";
import s_6 from "../../images/questionIcons/s-6.svg";
import s_7 from "../../images/questionIcons/s-7.svg";
import s_8 from "../../images/questionIcons/s-8.svg";
import s_9 from "../../images/questionIcons/s-9.svg";
import s_10 from "../../images/questionIcons/s-10.svg";

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
  {
    questionImage: q2,
    scenarioImage: s_2,
    question:
      "Inflation was 3% last year. The central bank thinks this was too high and introduced several measures to lower inflation. They are aiming for 1% inflation and expect to attain that next year.",
    subQuestion:
      "You have to decide where to put $100,000 you inherited from your grandma.",
    displayOptions: [
      "Savings account @ 2%",
      "Asset which rises with inflation",
    ],
    options: [
      "Savings account with 2% interest",
      "Asset which rises with inflation",
    ],
    description:
      "The central bank's efforts were successful and inflation was 1%. You were better off with the 2% savings account ($2,000) than the asset ($1,000).",
    prices: [2000, 1000],
    stringPrices: ["$2,000", "$1,000"],
    correctAnswer: 0,
    actualRate: "1%",
    choseText: "WHICH DO YOU CHOOSE?",
  },

  {
    questionImage: q3,
    scenarioImage: s_3,
    question:
      "The government is running a deficit and has decided to finance it by creating money. They plan on creating a LOT of money. Experts predict that the inflation rate as a result of the increase in the money supply might reach 6%.",
    subQuestion:
      "Your salary is $100,000. You are negotiating a potential raise.",
    displayOptions: ["2% automatic raise", "Whatever inflation is"],
    options: ["2% automatic raise", "Whatever inflation is"],
    description:
      "Expanding the money supply typically leads to inflation (in this case, it reached 6%). You were better off taking the inflation rate ($6,000) than the 2% raise ($2,000).",
    prices: [2000, 6000],
    stringPrices: ["$2,000", "$6,000"],
    correctAnswer: 1,
    actualRate: "6%",
    choseText: "WHICH DO YOU CHOOSE?",
  },
  {
    questionImage: q4,
    scenarioImage: s_4,
    question:
      "The central bank has long been run by a competent economist who has consistently kept inflation at 2%.",
    subQuestion:
      "You must decide whether to be a borrower or a lender. The interest rate is 4%.",
    options: ["Lend $100,000 at a 4% rate", "Borrow $100,000 at a 4% rate"],
    displayOptions: ["Lend $100K @ 4%", "Borrow $100K @ 4%"],
    description:
      "Interest rates were higher than inflation—so this is a win for lenders. Lenders got $104,000 back from borrowers, and the $100,000 they lent out is equivalent to $102,000 today (after adjusting for inflation). That's a $2,000 gain for lenders and $2,000 loss for borrowers.",
    prices: [2000, -2000],
    stringPrices: ["$2,000", "-$2,000"],
    sign: "-",
    actualRate: "2%",
    correctAnswer: 0,
    choseText: "WHICH DO YOU CHOOSE?",
  },
  {
    questionImage: q5,
    scenarioImage: s_5,
    question: "You are a notorious counterfeiter and have finally perfected the $100 dollar bill. You are definitely going to print a ton of these in the next year and spend like crazy. You expect that this would increase prices by at least 2%.",
    subQuestion:
      "You have to decide where to put the first $100,000 you print. You want it to hold its value.",
    displayOptions: [
      "Savings account @ 2%",
      "Asset which rises with inflation",
    ],
    options: [
      "Savings account with 2% interest",
      "Asset which rises with inflation",
    ],
    description:
      "You printed a ton of money and spent it. The increase in the amount of money YOU created made prices rise by 10% (in other words, the inflation rate was 10%). You were better off taking the inflation rate ($10,000) than the 2% savings account ($2,000).",
    prices: [2000, 10000],
    stringPrices: ["$2,000", "$10,000"],
    correctAnswer: 1,
    actualRate: "10%",
    choseText: "WHICH DO YOU CHOOSE?",
  },
  {
    questionImage: q6,
    scenarioImage: s_6,
    question:
      "Your country just got a new central banker. He has a dodgy reputation and only got the job because he plays cards with the president.",
    subQuestion:
      "You must decide whether to be a borrower or a lender. The interest rate is 4%.",
    options: ["Lend $100,000 at a 4% rate", "Borrow $100,000 at a 4% rate"],
    displayOptions: ["Lend $100k @ 4%", "Borrow $100K @ 4%"],
    description:
      'The central banker printed a bunch of money to buy a yacht named "Fi-yacht Currency." With the expansion of the money supply, the inflation rate was measured at 6%. Interest rates were lower than inflation, so this is a win for borrowers. Borrowers paid $104,000 back to lenders, but the $100,000 they borrowed is equivalent to $106,000 today (after adjusting for inflation). This represents a $2,000 gain for borrowers and a $2,000 loss for lenders.',
    prices: [-2000, 2000],
    stringPrices: ["-$2,000", "$2,000"],
    correctAnswer: 1,
    actualRate: "6%",
    choseText: "WHICH DO YOU CHOOSE?",
  },
  //7th question, but condiser as 10th
  {
    questionImage: q7,
    scenarioImage: s_7,
    question:
      "Once again the central bank is run by a competent, perfectionist banker. She is targeting 2% inflation this year.",
    subQuestion:
      "You have to decide where to put $100,000 you found under your mattress.",
    displayOptions: [
      "Savings account @ 3%",
      "Asset which rises with inflation",
    ],
    options: [
      "Savings account with 3% interest",
      "Asset which rises with inflation",
    ],
    description:
      "Inflation came in at 2.1% (0.1 percentage points higher than expected, a difference that keeps the banker up at night). You were better off with the savings account which increased by 3% instead of an inflation-pegged asset which rose by 2.1%.",
    prices: [3000, 2100],
    stringPrices: ["$3,000", "$2,100"],
    actualRate: "2%",
    correctAnswer: 0,
    choseText: "WHICH DO YOU CHOOSE?",
  },
  {
    questionImage: q8,
    scenarioImage: s_8,
    question:
      "Hackers threaten to unleash a global computer virus that will destroy all digital dollars (about 90% of all dollars only exist electronically).",
    subQuestion:
      "Your salary is $100,000. You are negotiating a potential raise.",
    displayOptions: ["2% automatic raise", "Whatever inflation is"],
    options: ["2% automatic raise", "Whatever inflation is"],
    description:
      "Welp! Those nasty hackers did it: they destroyed the digital dollars, so there is a lot less money. Because less money is chasing the same goods, prices go DOWN. This is deflation. You were better off taking the 2% raise ($2,000) than the inflation rate (-$20,000).",
    prices: [2000, -20000],
    stringPrices: ["$2,000", "-$20,000"],
    sign: "-",
    actualRate: "-20%",
    correctAnswer: 0,
    choseText: "WHICH DO YOU CHOOSE?",
  },
  {
    questionImage: q9,
    scenarioImage: s_9,
    question:
      "Octopuses have had it. They're tired of being eaten and have banded together to attack ships everywhere. Global trade looks like it might get much more expensive.",
    subQuestion:
      "You must decide whether to be a borrower or a lender. The interest rate is 4%.",
    options: ["Lend $100,000 at a 4% rate", "Borrow $100,000 at a 4% rate"],
    displayOptions: ["Lend $100K @ 4%", "Borrow $100K @ 4%"],
    description:
      "The army of Octopuses ravaged shipping fleets. Global trade became much more expensive and prices soared. Interest rates were lower than inflation, so this is a win for borrowers. Lenders got back $104,000, and you would need $130,000 today to have the same purchasing power as the $100,000 you lent out last year. This represents a $26,000 loss for lenders and a $26,000 gain for borrowers.",
    prices: [-26000, 26000],
    stringPrices: ["-$26,000", "$26,000"],
    correctAnswer: 1,
    actualRate: "30%",
    choseText: "WHICH DO YOU CHOOSE?",
  },
  {
    questionImage: q10,
    scenarioImage: s_10,
    question:
      "Uh-oh. An AI (artificial intelligence) has gained sentience. The war with the robots is finally here, and the government will likely have to print a bunch of money to pay for it.",
    subQuestion:
      "You have to decide where to put the $100,000 bonus you got at your job creating the sentient AI.",
    displayOptions: [
      "Savings account @ 3%",
      "Asset which rises with inflation",
    ],
    options: [
      "Savings account with 3% interest",
      "Asset which rises with inflation",
    ],
    description:
      "It's all-out war with the robots. With inflation running at 40%, you were better off investing in an asset that rises with inflation ($40,000).  But with robots bent on world domination, your bank account is the least of your worries.",
    prices: [3000, 40000],
    stringPrices: ["$3,000", "$40,000"],
    correctAnswer: 1,
    actualRate: "40%",
    choseText: "WHICH DO YOU CHOOSE?",
  },
];

export default questionSet;
