function solve(array) {
    const sortedusers = array.sort(function(a, b) {
        var nameA = a.toUpperCase(); // ignore upper and lowercase
        var nameB = b.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1; //nameA comes first
        }
        if (nameA > nameB) {
          return 1; // nameB comes first
        }
        return 0;  // names must be equal
      });
      let result = ``;
      let step = 1;
      sortedusers.forEach(element => {
          result += `${step}.${element}\n`;
          step += 1;
      });
      return result;
}

console.log(solve(['John', 'Bob', 'Christina', 'Ema']))
// 80 % test -> one test doesnt pass
