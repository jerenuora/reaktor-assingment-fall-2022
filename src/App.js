import { useEffect, useState } from 'react'
import './App.css'
import parse from './services/parser'
import Packages from './components/Packages'

const App = () => {
  const [fetchedData, setData] = useState('')

  const url =
    'https://raw.githubusercontent.com/python-poetry/poetry/70e8e8ed1da8c15041c3054603088fce59e05829/poetry.lock'

  const loadData = (url) => {
    fetch(url)
      .then(function (response) {
        return response.text()
      })
      .then(function (data) {
        setData(data)
      })
  }
  useEffect(() => {
    loadData(url)
  }, [])

  const parsedData = parse(fetchedData)
  // console.log(parsedData)
  return (
    <div className="App">
      <Packages data={parsedData} />
    </div>
  )
}

export default App
