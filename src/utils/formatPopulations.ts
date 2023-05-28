export const formatPopulation = (population: number) => {
  if (population >= 1000000000) {
    return `${(population / 1000000000).toFixed(2)} billion`;
  } else if (population >= 1000000) {
    return `${(population / 1000000).toFixed(2)} million`;
  } else if (population >= 1000) {
    return `${(population / 1000).toFixed(2)} thousand`;
  } else {
    return population.toString();
  }
};
