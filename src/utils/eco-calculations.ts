// Constants for ecological calculations
const CO2_PER_KWH = 0.475; // kg of CO2 per kWh (average for fossil fuel electricity)
const TREES_PER_KG_CO2 = 0.0001; // Number of trees needed to absorb 1 kg of CO2 per year

export const calculateEcoSavings = (power: number, hours: number = 1) => {
  // Convert power from watts to kilowatts
  const powerKW = power / 1000;
  // Calculate energy in kWh
  const energyKWh = powerKW * hours;
  // Calculate CO2 savings
  const co2Savings = energyKWh * CO2_PER_KWH;
  // Calculate equivalent trees
  const equivalentTrees = co2Savings * TREES_PER_KG_CO2;

  return {
    co2Savings: co2Savings.toFixed(2),
    equivalentTrees: equivalentTrees.toFixed(2)
  };
}; 