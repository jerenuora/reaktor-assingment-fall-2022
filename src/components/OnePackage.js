import React from 'react'

const OnePackage = ({
  name,
  description,
  dependenciesInstalled,
  extrasInstalled,
  dependenciesOptional,
  extrasOptional,
}) => (
    <div>
        Package name: 
        <p>
            {name}
        </p>
        Description:
        <p>
            {description}
            </p>
        <p>

            {dependenciesInstalled}
            </p>
        <p>

            {extrasInstalled}
            </p>
        <p>

            {dependenciesOptional}
            </p>
        <p>

            {extrasOptional}
        </p>
    </div> 
  )


export default OnePackage