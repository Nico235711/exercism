export function dayRate(hourlyRate) {
  const workHours = 8
  return hourlyRate * workHours
}

export function daysInBudget(budget, hourlyRate) {
  const hourDayRate = dayRate(hourlyRate)
  return Math.floor(budget / hourDayRate)
}

export function priceWithMonthlyDiscount(hourlyRate, billableDays, monthlyDiscount) {
  const billablePerMonth = 22
  const workRate = dayRate(hourlyRate) // tasa de horas de trabajo
  const fullMonths = Math.floor(billableDays / billablePerMonth) // meses completos
  const remainingDays = billableDays % billablePerMonth // dias restantes
  const monthlyCost = fullMonths * (workRate * billablePerMonth) * (1 - monthlyDiscount)
  const remainingCost = workRate * remainingDays
  return Math.ceil(monthlyCost + remainingCost)
}

const hourDayRate = dayRate(89) // => 712
const workdays = daysInBudget(20000, 89) // => 28
const largeProjectPrice = priceWithMonthlyDiscount(89, 230, 0.42) // => 97972
console.log({hourDayRate, workdays, largeProjectPrice})
