const parse = (data) => {
  let splitData = data.split('[[package]]') // split into individual packages

  splitData.shift() // remove the first instance of the array, to avoid a null element

  return splitData.map((data) => {
    // map the text into an object

    let returnData = {}

    if (data === '') {   // to avoid a crash in case of data not loaded yet
      return null
    }

    const dataByRows = data.split('\n')

    returnData.name = dataByRows[1].slice(8, -1)          // name and description will be at the same rows 
    returnData.description = dataByRows[3].slice(15, -1)  // and indexes in all the packages so they can be hard-coded

    returnData.dependencies = []
    returnData.extras = []

    let dependencies = false
    let extras = false

    for (let row = 8; row < dataByRows.length; row++) {

      if (dataByRows[row] === '') {  // mark the end of dependencies or extras appearing
        dependencies = false
        extras = false
      }

      if (dependencies) {
          returnData.dependencies.push(
            dataByRows[row].slice(0, dataByRows[row].search(' ')).toLowerCase()
          )
        
      }
      if (extras) {
          returnData.extras.push(
            dataByRows[row].slice(0, dataByRows[row].search(' ')).toLowerCase()
          )
        
      }
      if (dataByRows[row] === '[package.dependencies]') { // mark the beginning of dependencies 
        dependencies = true
      }
      if (dataByRows[row] === '[package.extras]') {  // mark the beginning of extras
        extras = true
      }
    }
    return returnData
  })
}

export default parse
