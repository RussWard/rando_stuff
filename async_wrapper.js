
function asyncMap(array, cb) {
  const results = [];
  array.forEach((func, i) => {
    func((err, result) => {
      if (err) { console.log(err) }
      else {
        results[i] = result;
        if (results.length === array.length && !results.includes(undefined)) {
          cb(results);
        }
      }
    })
  })
}