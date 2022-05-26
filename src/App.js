import { useEffect, useState } from 'react'
import './App.css'
import parse from './services/parser'
import Packages from './components/Packages'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import OnePackage from './components/OnePackage'
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
    <Router>
      <h2>
        <Link to="/">HOME</Link>
      </h2>
      <Routes>
        <Route path="/" element={<Packages data={parsedData} />} />
        <Route
          path="/:name"
          element={<OnePackage packageInfo={parsedData} />}
        />
      </Routes>
    </Router>
  )
}

export default App
