import React from 'react'
import { Helmet } from 'react-helmet'

const HelmetCustom = ({title=`Aman's Youtube`,description=`A project made using React Js`}) => {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
    </Helmet>
  )
}

export default HelmetCustom