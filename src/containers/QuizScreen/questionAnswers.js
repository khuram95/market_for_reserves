import vaccine from "../../images/circleIcons/supply/Vaccine.png";
import bicycle from "../../images/circleIcons/supply/Bicycle.png";
import car from "../../images/circleIcons/supply/Cars.png";
import chocolate from "../../images/circleIcons/supply/Chocolate.png";
import dumbells from "../../images/circleIcons/supply/Dumbells.png";
import haircut from "../../images/circleIcons/supply/Haircut.png";
import luggage from "../../images/circleIcons/supply/Luggage.png";
import milk from "../../images/circleIcons/supply/Milk.png";
import pizza from "../../images/circleIcons/supply/Pizza.png";
import tennisball from "../../images/circleIcons/supply/Tennisball.png";

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
];

export default questionAnswers;
