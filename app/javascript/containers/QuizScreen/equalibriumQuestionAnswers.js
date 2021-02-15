import bracelets from "../../images/circleIcons/equalibrium/bracelets.png";
import icecream from "../../images/circleIcons/equalibrium/Icecream.png";
import silver from "../../images/circleIcons/equalibrium/silver.png";
import avocado from "../../images/circleIcons/equalibrium/avocado.png";
import vase from "../../images/circleIcons/equalibrium/vase.png";
import gaming from "../../images/circleIcons/equalibrium/gaming.png";
import soda from "../../images/circleIcons/equalibrium/soda.png";
import alcohol from "../../images/circleIcons/equalibrium/alcohol.png";
import physicians from "../../images/circleIcons/equalibrium/physicians.png";
import chapstick from "../../images/circleIcons/equalibrium/chapstick.png";

const questionAnswers = [

  {
    title: "MARKET FOR BRACELETS",
    question: "Fashion magazines: Wearing multiple bracelets is the hot new trend.",
    subQuestion: "Consider the market for bracelets. What happens?",
    icon: bracelets,
    answer: "Demand curve shifts right",
    graphType: "supply curve",
    briefness:
      "If wearing multiple bracelets is now in style, this means that demand for bracelets will increase. The demand curve will shift to the right.",
  },
  {
    title: "MARKET FOR ICE CREAM",
    question: "Ice cream producers think the price of ice cream will increase in 6 months.",
    subQuestion: "Consider the market for ice cream. What happens?",
    icon: icecream,
    answer: "Supply curve shifts left",
    graphType: "supply curve",
    briefness:
      "If ice cream sellers think they can charge a higher price for ice cream in the near future, they will put some of their ice cream in storage. The supply of ice cream will decrease and the supply curve will shift to the left.",
  },

  {
    title: "MARKET FOR SILVER",
    question: "The price of gold goes up.",
    subQuestion: "Consider the market for silver. What happens?",
    icon: silver,
    answer: "Demand curve shifts right",
    graphType: "supply curve",
    briefness:
      "Gold and silver are substitutes. If the price of gold increases, the quantity demanded will decrease. Demand for silver—a substitute—will increase. The demand curve for silver will shift to the right.",
  },

  {
    title: "MARKET FOR AVOCADOS",
    question: "New farming technology makes it possible to grow avocados in more places.",
    subQuestion: "Consider the market for avocados. What happens?",
    icon: avocado,
    answer: "Supply curve shifts right",
    graphType: "supply curve",
    briefness:
      "If avocados can be grown in more locations, this increases the number of potential avocado sellers. The supply of avocados will increase and the supply curve will shift to the right.",
  },

  {
    title: "MARKET FOR VASES",
    question: "The price of flowers increases.",
    subQuestion: "Consider the market for vases. What happens?",
    icon: vase,
    answer: "Demand curve shifts left",
    graphType: "supply curve",
    briefness:
      "Flowers and vases are complements. As the price of flowers increases, the quantity demanded will decrease. Demand for vases—a complement—will decrease. The demand curve for vases will shift to the left.",
  },

  {
    title: "MARKET FOR GAMING CONSOLES",
    question: "LEAKED: New, more advanced game console to be launched in 6 months.",
    subQuestion: "Consider the market for gaming consoles. What happens?",
    icon: gaming,
    answer: "Demand curve shifts left",
    graphType: "supply curve",
    briefness:
      "If consumers think a new, superior gaming console will be sold in 6 months, they may hold off purchasing a new gaming console until then. Therefore, the demand for gaming consoles now will decrease and the demand curve will shift to the left.",
  },

  {
    title: "MARKET FOR SODA",
    question: "The price of sugar—an ingredient of soda—reaches new heights.",
    subQuestion: "Consider the market for soda. What happens?",
    icon: soda,
    answer: "Supply curve shifts left",
    graphType: "supply curve",
    briefness:
      "If the price of sugar—an input of soda—increases, then the production costs of soda go up. The supply of soda will decrease and the supply curve will shift to the left.",
  },

  {
    title: "MARKET FOR ALCOHOL",
    question: "State governments enact new tax on alcohol producers.",
    subQuestion: "Consider the market for alcohol. What happens?",
    icon: alcohol,
    answer: "Supply curve shifts left",
    graphType: "supply curve",
    briefness:
      "Imposing a tax on suppliers of alcohol is equivalent to increasing their production costs. The supply curve will shift to the left.",
  },

  {
    title: "MARKET FOR PHYSICIANS",
    question: "New law gives nurse practioners the full practicing authority of physicians.",
    subQuestion: "Consider the market for physicians. What happens?",
    icon: physicians,
    answer: "Supply curve shifts right",
    graphType: "supply curve",
    briefness:
      "If nurse practioners are now able to provide the same services as medical doctor, this means, in essence, that the supply of physicians has increased. The supply curve for physicians will shift to the right.",
  },

  {
    title: "MARKET FOR CHAPSTICK",
    question: "Puppy adoptions surge during pandemic.",
    subQuestion: "Consider the market for chapstick. What happens?",
    icon: chapstick,
    answer: "Nothing happens",
    graphType: "supply curve",
    briefness:
      "This was a trick question. As far as we know there is no relationship between puppy adoptions and the market for chapstick.",
  },
];

export default questionAnswers;
