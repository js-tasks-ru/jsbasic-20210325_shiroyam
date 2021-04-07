function sumSalary(salaries) {
  let sum = 0
  for (let salary of Object.values(salaries)){
    sum = sum + salary
  }
}
