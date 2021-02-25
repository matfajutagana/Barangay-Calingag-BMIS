import React from 'react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import MyDoc from './MyDoc'

const Clearance = ({ res }) => {
  return (
    <div>
      <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
        Download Now
      </PDFDownloadLink>
    </div>
  )
}

export default Clearance
