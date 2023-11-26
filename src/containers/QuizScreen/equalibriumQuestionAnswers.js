import oil from "../../images/circleIcons/equalibrium/oil.png";

const questionAnswers = [
  {
    title: "Market for Reserves",
    question: "The central bank sells bonds to banks.",
    subQuestion: "What happens in the market for reserves?",
    icon: oil,
    answer: "Supply curve shifts left",
    type: "limited",
    graphType: "supply curve",
    briefness:"When the central bank sells bonds to banks, the banks use existing reserves to buy those bonds. This removes some reserves from the market, shifting the supply curve back (to the left) and the Federal Funds Rate increases.",
  },
  {
    title: "Market for Reserves",
    question: "The central bank buys bonds from banks.",
    subQuestion: "What happens in the market for reserves?",
    icon: oil,
    answer: "Supply curve shifts right",
    type: "limited",
    graphType: "supply curve",
    briefness:
      "When the central bank buys bonds from banks, the bank receives money for those bonds. This increases reserves in the market, shifting the supply curve out (to the right) and the Federal Fund Rate decreases.",
  },
  {
    title: "Market for Reserves",
    question: "Economic uncertainty has many citizens holding their wealth in gold instead of cash, what happens in the money market",
    subQuestion: "What happens in the market for reserves?",
    icon: oil,
    answer: "Demand curve shifts left",
    type: "limited",
    graphType: "supply curve",
    briefness:
      "If people are holding more of their wealth in non-cash assets, this reduces the demand for money, shifting the demand curve down (to the left) and the Federal Funds Rate decreases.",
  },
  // {
  //   title: "Market for Reserves",
  //   question: "The central bank increases the amount that banks are required to hold in reserves.",
  //   subQuestion: "What happens in the market for reserves?",
  //   icon: oil,
  //   answer: "Demand curve shifts right",
  //   type: "limited",
  //   graphType: "supply curve",
  //   briefness:
  //     "When the central bank increases the amount that banks are required to hold in reserves, banks need to hold more reserves. This increases the demand for reserves, shifting the demand curve up (to the right) and the Fed Funds Rate increases.",
  // },
  {
    title: "Market for Reserves",
    question: "The central bank buys assets from banks (like mortgages).",
    subQuestion:  "What happens in the market for reserves?",
    icon: oil,
    answer: "Supply curve shifts right",
    type: "limited",
    graphType: "supply curve",
    briefness:
      "When the central bank buys assets from banks, the bank receives money for those assets. This increases reserves in the market, shifting the supply curve out (to the right) and the Federal Funds Rate decreases.",
  },

  // // shift up => shift left
  // // shift down => shift right
  // {
  //   title: "MARKET FOR RESERVES (Ample)",
  //   question: "The central bank raises their administered rates.",
  //   subQuestion: "What happens in the market for reserves?",
  //   icon: oil,
  //   answer: "Demand curve shifts left",
  //   answerShow: "Administered rates increase",
  //   type: "ample",
  //   graphType: "supply curve",
  //   briefness:
  //     "When the central bank raises their administered rates, this will increase both the Discount Rate and Interest on Reserves, shifting the price floor and ceiling (and Fed Funds Rate) up.",
  // },
  // {
  //   title: "MARKET FOR RESERVES (Ample)",
  //   question: "The central bank lowers their administered rates.",
  //   subQuestion: "What happens in the market for reserves?",
  //   icon: oil,
  //   answer: "Demand curve shifts right",
  //   answerShow: "Administered rates decrease",
  //   type: "ample",
  //   graphType: "supply curve",
  //   briefness:
  //     "When the central bank lowers their administered rates, this will decrease both the Discount Rate and Interest on Reserves, shifting the price floor and ceiling (and Fed Funds Rate) down.",
  // },
  // {
  //   title: "MARKET FOR RESERVES (Ample)",
  //   question: "The central bank buys bonds from banks.",
  //   subQuestion: "What happens in the market for reserves?",
  //   icon: oil,
  //   answer: "Supply curve shifts right",
  //   answerShow: "Supply curve shifts right",
  //   type: "ample",
  //   graphType: "supply curve",
  //   briefness:
  //     "When the central bank buys bonds from banks, this will increase bank reserves and therefore the supply of reserves—shifting the supply curve to the right. Because we are in the ample reserve scenario and on the flat part of the demand curve, the Fed Funds Rate will not change.",
  // },
  // {
  //   title: "MARKET FOR RESERVES (Ample)",
  //   question: "The central bank is facing a recession (if they act according to standard monetary policy).",
  //   subQuestion: "What happens in the market for reserves?",
  //   icon: oil,
  //   answer: "Demand curve shifts right",
  //   answerShow: "Administered rates decrease",
  //   type: "ample",
  //   graphType: "supply curve",
  //   briefness: "When facing a recession, central banks usually lower their administered rates. This will decrease both the Discount Rate and Interest on Reserves, shifting the price floor and ceiling (and Fed Funds Rate) down.",
  // },
  // {
  //   title: "MARKET FOR RESERVES (Ample)",
  //   question: "The central bank is facing high inflation (if they act according to standard monetary policy).",
  //   subQuestion: "What happens in the market for reserves?",
  //   icon: oil,
  //   answer: "Demand curve shifts left",
  //   answerShow: "Administered rates increase",
  //   type: "ample",
  //   graphType: "supply curve",
  //   briefness: "When facing inflation, central banks usually raise their administered rates. This will increase both the Discount Rate and Interest on Reserves, shifting the price floor and ceiling (and Fed Funds Rate) up.",
  // },
];

export default questionAnswers;
