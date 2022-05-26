import React from 'react'
import { useParams } from 'react-router-dom'
import PackageLink from './PackageList'
const OnePackage = ({ packageInfo }) => {
  const name = useParams().name

  if (Object.keys(packageInfo).length < 2) {
    return (
      <div>
        <p>loading</p>
      </div>
    )
  }

  console.log('packageinfo', packageInfo)
  const singePackage = packageInfo.find((p) => p.name === name)
  console.log(singePackage)
  return (
    <div>
      Package name:
      <p>{singePackage.name}</p>
      Description:
      <p>{singePackage.description}</p>
      Dependencies:
      <ul>
        {singePackage.dependenciesInstalled.map((dependency) => {
            if (packageInfo.find((p) => p.name === dependency)) {
                return (
              <li key={dependency}>
              <PackageLink key={dependency} name={dependency} />
            </li>)} else {
                return (<li key={dependency}>{dependency}</li>)
            }
            })}
          </ul>
      Reverse dependencies:
      <ul>
        {singePackage.extrasInstalled.map((dependency) => {
            if (packageInfo.find((p) => p.name === dependency)) {
            return (
          <li key={dependency}>
          <PackageLink key={dependency} name={dependency} />
        </li>)} else {
            return (<li key={dependency}>{dependency}</li>)
        }
        })}
      </ul>
    </div>
  )
}

export default OnePackage
