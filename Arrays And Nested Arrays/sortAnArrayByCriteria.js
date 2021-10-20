function sortByTwoCriteria(array) {
    array.sort(function(a, b) {
        return a.length - b.length || a.localeCompare(b);
        // sorting by length ascending and then
        // then by alpha ascending
      });
      array.forEach(element => {
          console.log(element);
      });
}

sortByTwoCriteria(['alpha', 'beta', 'gamma'])
sortByTwoCriteria(['Isacc', 'Theodor', 'Jack'])