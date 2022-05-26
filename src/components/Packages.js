import React from 'react'

import PackageLink from './PackageList'

const Packages = ({ data }) => {
  console.log(data)
  console.log(Object.keys(data).length)
  if (Object.keys(data).length < 2) {
    return (
      <div>
        <p>loading</p>
      </div>
    )
  }
  return (
    <div>
      <h2>Packages for this poetry.lock</h2>
      <ul>
        {data.map((packages) => (
          <li key={packages.name}>
            <PackageLink
              key={packages.name}
              name={packages.name}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Packages
