import laptopIcon          from 'images/circleIcons/laptop.png'
// import sodaIcon            from 'images/circleIcons/soda.png'
import peanutbutterIcon    from 'images/circleIcons/peanutbutter.png'
// import dogIcon             from 'images/circleIcons/dog.png'
import gasIcon             from 'images/circleIcons/gas.png'
import fiveGIcon           from 'images/circleIcons/5G.png'
import sodaIcon            from 'images/circleIcons/soda2.png'
import playstationIcon     from 'images/circleIcons/playstation.png'
import electricCarIcon     from 'images/circleIcons/electricCar.png'
import restaurantCovidIcon from 'images/circleIcons/restaurantCovid.png'
import hearingAidIcon      from 'images/circleIcons/hearingAid.png'
import meatIcon            from 'images/circleIcons/meat.png'
import restaurantTaxIcon   from 'images/circleIcons/restaurantTax.png'
import walkerIcon          from 'images/circleIcons/walker.png'

const questionAnswers = [
  // {
  //   title: 'DEMAND CURVE FOR LAPTOPS',
  //   question: "Consumers expect the price of laptop computers to decrease in the coming months.",
  //   subQuestion: "What happens to the demand for laptops?",
  //   icon: laptopIcon,
  //   answer: "shifts left",
  //   briefness: "The expectation of lower prices in the future will cause a decrease in the demand for laptops today. At every price, consumers will buy fewer computers today.",
  // },
  // {
  //   title: 'DEMAND CURVE FOR SODA',
  //   question: "A reduction in the supply of soda causes the price of soda to increase.",
  //   subQuestion: "What happens to the demand for soda?",
  //   icon: sodaIcon,
  //   answer: "goes up",
  //   briefness: "A change in price causes movement along the curve. It does not change demand, only quantity demanded. A decrease in price would cause an increase in the quantity demanded.",
  // },
  // {
  //   title: 'DEMAND CURVE FOR PEANUT BUTTER',
  //   question: "The price of almond butter, a substitute for peanut butter, decreases.",
  //   subQuestion: "What happens to the demand for peanut butter?",
  //   icon: peanutbutterIcon,
  //   answer: "shifts left",
  //   briefness: "When the price of almond butter decreases, consumers will purchase MORE almond butter (movement along the almond butter demand curve) and LESS peanut butter at every price (leftward shift of peanut butter demand curve).",
  // },
  // {
  //   title: "DEMAND CURVE FOR DOG FOOD",
  //   question: 'People buy more dogs during the pandemic.',
  //   subQuestion: "What happens to the demand curve for dog food?",
  //   icon: dogIcon,
  //   answer: "shifts right",
  //   briefness: "Dogs need food, so they are complements. More adopted puppies will mean an increase in demand for dog food. The demand curve will shift to the right.",
  // },

  {
    title: "SUPPLY CURVE FOR SODA",
    question: 'Government enacts a tax on the production of soda.',
    subQuestion: "Consider the supply curve for soda. What happens?",
    icon: sodaIcon,
    answer: "shifts left",
    briefness: "Taxes levied on the production of a product will cause the supply curve to shift left.",
  },
  {
    title: "SUPPLY CURVE FOR OATS",
    question: 'Price of corn falls.',
    subQuestion: "Consider the supply curve for oats (another crop farmers can produce). What happens?",
    icon: sodaIcon,
    answer: "shifts right",
    briefness: "When the price of another product suppliers can produce decreases, supplier will shift production away from that product, decreasing quantity supplied. Farmer will produce the other product instead (a rightward shift in the supply curve).",
  },
  {
    title: "SUPPLY CURVE FOR SMARTPHONES",
    question: 'Higher demand for smartphone leads to price hike.',
    subQuestion: "Consider the supply curve for smartphones. What happens?",
    icon: fiveGIcon,
    answer: "goes up",
    briefness: "A change in price does not change supply; only quantity supplied. An increase in the price will cause quantity supplied to increase.",
  },
  // {
  //   title: "DEMAND CURVE FOR SUVs",
  //   question: 'Gas prices plummet and stay low for years.',
  //   subQuestion: "Consider the demand curve for SUVs. What happens?",
  //   icon: gasIcon,
  //   answer: "shifts right",
  //   briefness: "Gas and SUVs are complements. If the price of gas falls, the quantity demanded for gas will increase. Demand for SUVs, a complement, will increase and the demand curve will shift to the right.",
  // },
  // {
  //   title: "DEMAND CURVE FOR 5G PHONES",
  //   question: 'Tech expert: "Wait a year until technology improves before buying a 5G phone."',
  //   subQuestion: "Consider the demand curve for 5G phones. What happens?",
  //   icon: fiveGIcon,
  //   answer: "shifts left",
  //   briefness: "If consumers expect that the quality will dramatically improve within a year, they will delay purchasing 5G phones. This will cause a decrease in demand, and the demand curve will shift to the left.",
  // },
  // {
  //   title: "DEMAND CURVE FOR SODA",
  //   question: 'Government enacts soda tax and the price of soda increases.',
  //   subQuestion: "Consider the demand curve for soda. What happens?",
  //   icon: sodaIcon,
  //   answer: "goes down",
  //   briefness: "This will only change the price. This will cause the quantity demanded for soda to decrease.",
  // },
  // {
  //   title: "DEMAND CURVE FOR VIDEO GAME CONSOLES",
  //   question: 'Gamers are upset over an increase in video game prices.',
  //   subQuestion: "Consider the demand curve for video game consoles. What happens?",
  //   icon: playstationIcon,
  //   answer: "shifts left",
  //   briefness: "Video games and game consoles are complements. As the price of games increase, the quantity demanded for videos games will decrease. Demand for video game consoles, a complement, will decrease. The demand curve will shift to the left.",
  // },
  // {
  //   title: "DEMAND CURVE FOR ELECTRIC CARS",
  //   question: 'The price of electric cars drops because the government subsidizes manufacturers.',
  //   subQuestion: "Consider the demand curve for electric cars. What happens?",
  //   icon: electricCarIcon,
  //   answer: "goes up",
  //   briefness: "This will only change the price. At a lower price, the quantity demanded for electric cars will go up.",
  // },
  // {
  //   title: "DEMAND CURVE FOR RESTAURANTS",
  //   question: 'Researchers say restaurants are high-risk area for spreading coronavirus.',
  //   subQuestion: "Consider the demand curve for restaurants. What happens?",
  //   icon: restaurantCovidIcon,
  //   answer: "shifts left",
  //   briefness: "The increased health risks of eating out will cause consumers to eat out less often, regardless of price. This change in consumer preferences will cause the demand curve to shift to the left.",
  // },
  // {
  //   title: "DEMAND CURVE FOR COMPUTERS",
  //   question: 'Hearing aids will now be sold without a prescription.',
  //   subQuestion: "Consider the demand curve for computers. What happens?",
  //   icon: hearingAidIcon,
  //   answer: "Nothing happens",
  //   briefness: "This was a trick question. Hearing aids and computers aren't substitutes or complements, so the change in the hearing aid market shouldn't affect demand in the computer market.",
  // },
  // {
  //   title: "DEMAND CURVE FOR REAL MEAT",
  //   question: 'Synthetic meat now cheaper because of a breakthrough in technology.',
  //   subQuestion: "Consider the demand curve for real meat. What happens?",
  //   icon: meatIcon,
  //   answer: "shifts left",
  //   briefness: "Synthetic meat and real meat are substitutes. If the price of synthetic meat decreases, the quantity demanded will increase. Demand for real meat, a substitute for synthetic meat, will decrease, and the demand curve will shift to the left.",
  // },
  // {
  //   title: "DEMAND CURVE FOR RESTAURANTS",
  //   question: 'New tax introduced on all restaurant meals and the price of eating out increases.',
  //   subQuestion: "Consider the demand curve for restaurants. What happens?",
  //   icon: restaurantTaxIcon,
  //   answer: "goes down",
  //   briefness: "This will only change the price. With an increase in the price of restaurant meals, quantity demanded for restaurants will decrease.",
  // },
  // {
  //   title: "DEMAND CURVE FOR WALKERS",
  //   question: 'Elderly population is increasing at unprecedented rates worldwide.',
  //   subQuestion: "Consider the demand curve for walkers. What happens?",
  //   icon: walkerIcon,
  //   answer: "shifts right",
  //   briefness: "A rising elderly population means that demand will increase for products that seniors use, including walkers.",
  // },
]

export default questionAnswers
