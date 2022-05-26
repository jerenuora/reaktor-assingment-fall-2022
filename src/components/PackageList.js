import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const PackageLink = ({ name }) => {
    return (
    <div>
      <p>
        <Link to={`/${name}`}>{name}</Link>
      </p>
    </div>
    )

}

export default PackageLink
