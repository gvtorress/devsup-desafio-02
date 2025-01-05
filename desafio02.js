function totalSales(sales, department) {
  const count = 0;
  const total = 0;
  return recursiveTotalSales(sales, department, count, total);
}

function recursiveTotalSales(sales, department, count, total) {
  if (sales.length === 0) return [count, total];
  const salesInfo = sales[0];
  if (salesInfo[3] === department) {
    count += 1;
    total += Number(salesInfo[2]);
  }
  newSales = sales.slice(1);
  return recursiveTotalSales(newSales, department, count, total);
}

const data = {
  "sales": [
    "8349,14/09/2024,899.9,ESPORTE",
    "4837,17/09/2024,530.0,VESTUARIO",
    "15281,21/09/2024,1253.99,ESPORTE",
    "15344,27/09/2024,1000.9,VESTUARIO",
    "18317,04/10/2024,250.4,VESTUARIO",
    "18972,11/10/2024,385.5,JARDINAGEM"
  ],
  "department": "VESTUARIO"
};

const sales = data.sales.map((s) => s.split(","));
const department = data.department;

const result = totalSales(sales, department);
console.log(`${result[0]} VENDAS\nTOTAL = $ ${result[1].toFixed(2)}`);
