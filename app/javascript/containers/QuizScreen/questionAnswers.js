import vaccine from "images/circleIcons/supply/Vaccine.png";
import bicycle from "images/circleIcons/supply/Bicycle.png";
import car from "images/circleIcons/supply/Cars.png";
import chocolate from "images/circleIcons/supply/Chocolate.png";
import dumbells from "images/circleIcons/supply/Dumbells.png";
import haircut from "images/circleIcons/supply/Haircut.png";
import luggage from "images/circleIcons/supply/Luggage.png";
import milk from "images/circleIcons/supply/Milk.png";
import pizza from "images/circleIcons/supply/Pizza.png";
import tennisball from "images/circleIcons/supply/Tennisball.png";

const questionAnswers = [
  // {
  //   title: "CHART TITLE",
  //   question: "breaking new",
  //   subQuestion: "Question",
  //   answer: "What happens to graph",
  //   briefness: "Answer",
  // graphType: 'supply curve/demand curve',
  // },

  {
    title: "SUPPLY CURVE FOR COVID-19 VACCINES",
    question:
      "Government provides subsidies to firms involved in vaccine production.",
    subQuestion:
      "Consider the supply curve for COVID-19 vaccines. What happens?",
    icon: vaccine,
    answer: "shifts right",
    graphType: "supply curve",
    briefness:
      "A subsidy from the government will lower production costs. This will shift the supply curve for vaccines to the right.",
  },
  {
    title: "SUPPLY CURVE FOR HAIRCUTS",
    question:
      "New COVID-19 safety rules reduce the productivity of hairdressers.",
    subQuestion: "Consider the supply curve for haircuts. What happens?",
    icon: haircut,
    answer: "shifts left",
    graphType: "supply curve",
    briefness:
      "A decrease in productivity raises production costs for hair dressers. This will cause the supply curve to shift to the left.",
  },

  {
    title: "SUPPLY CURVE FOR BICYCLES",
    question:
      "The price of bicycles increases due to a shift in consumer preferences.",
    subQuestion: "Consider the supply curve for bicycles. What happens?",
    icon: bicycle,
    answer: "goes up",
    graphType: "supply curve",
    briefness:
      "The example only describes a change in price. Therefore, the supply curve does not shift and the quantity supplied increases.",
  },

  {
    title: "SUPPLY CURVE FOR CHOCOLATE",
    question: "The price of cacoa beans, an ingredient in chocolate, plummets.",
    subQuestion: "Consider the supply curve for chocolate. What happens?",
    icon: chocolate,
    answer: "shifts right",
    graphType: "supply curve",
    briefness:
      "If an input price drops, this causes the cost of producing chocolate to fall. The supply curve will shift to the right.",
  },

  {
    title: "SUPPLY CURVE FOR LUGGAGE",
    question:
      "Producers believe the price of luggage will increase in 6 months.",
    subQuestion: "Consider the supply curve for luggage. What happens?",
    icon: luggage,
    answer: "shifts left",
    graphType: "supply curve",
    briefness:
      "If luggage producers think the price of luggage will increase in 6 months, they will move some of their supply into storage in the hopes of selling those items later at the higher price. In the short run, this will mean the supply curve will shift to the left.",
  },

  {
    title: "SUPPLY CURVE FOR PIZZA",
    question:
      "The price of pizza decreases due to consumers turning to healthier alternatives.",
    subQuestion: "Consider the supply curve for pizza. What happens?",
    icon: pizza,
    answer: "goes down",
    graphType: "supply curve",
    briefness:
      "The example only describes a change in price. Therefore, the supply curve does not shift and the quantity supplied decreases.",
  },

  {
    title: "SUPPLY CURVE FOR TENNIS BALLS",
    question: "The government imposes a tax on tennis balls producers.",
    subQuestion: "Consider the supply curve for tennis balls. What happens?",
    icon: tennisball,
    answer: "shifts left",
    graphType: "supply curve",
    briefness:
      "A tax on producers increases the costs of production. The supply curve will shift to the left.",
  },

  {
    title: "SUPPLY CURVE FOR MILK",
    question: "The government lifts restrictive barriers on trading milk.",
    subQuestion: "Consider the supply curve for milk. What happens?",
    icon: milk,
    answer: "shifts right",
    graphType: "supply curve",
    briefness:
      "If the government lifts barriers to trade, more sellers will enter the market and this will shift the supply curve to the right.",
  },

  {
    title: "SUPPLY CURVE FOR CARS",
    question: "The price of steel, an input for car production, increases.",
    subQuestion: "Consider the supply curve for cars. What happens?",
    icon: car,
    answer: "shifts left",
    graphType: "supply curve",
    briefness:
      "Steel is an input for car production, so an increase in the price of steel will raise the costs of car production. The supply curve will shift to the left.",
  },

  {
    title: "SUPPLY CURVE FOR DUMBBELLS",
    question:
      "The price of dumbbells increases because consumers shift away from gyms to home exercise.",
    subQuestion: "Consider the supply curve for dumbbells. What happens?",
    icon: dumbells,
    answer: "goes up",
    graphType: "supply curve",
    briefness:
      "The example only describes a change in price. Therefore, the supply curve does not shift and the quantity supplied increases.",
  },
];

export default questionAnswers;
