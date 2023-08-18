import React, {Fragment} from 'react'
import {generatePDF} from './generatePDF'
import Button from '../ui/button'

export default function PDFGenerator({ data }) {
  const generateAndDownloadPDF = () => {
    generatePDF(data)
  }

  return (
    <Fragment>
        <table className='w-[1200px] mt-10 m-auto text-left'>
        <tbody>
        <tr>
            <th className='border border-slate-400 p-2 bg-blue-600 text-white'>
                Project Name
            </th>
             <th className='border border-slate-400 p-2 bg-blue-600 text-white'>
                Client
            </th>
             <th className='border border-slate-400 p-2 bg-blue-600 text-white'>
                Contractor
            </th>
             <th className='border border-slate-400 p-2 bg-blue-600 text-white'>
                Project Description
            </th>
             <th className='border border-slate-400 p-2 bg-blue-600 text-white'>
                Max X
            </th>
             <th className='border border-slate-400 p-2 bg-blue-600 text-white'>
                Min X
            </th>
             <th className='border border-slate-400 p-2 bg-blue-600 text-white'>
                Max Y
            </th>
             <th className='border border-slate-400 p-2 bg-blue-600 text-white'>
                Min Y
            </th>
             <th className='border border-slate-400 p-2 bg-blue-600 text-white'>
                Max Z
            </th>
             <th className='border border-slate-400 p-2 bg-blue-600 text-white'>
                Min Z
            </th>
        </tr>
        {
            data.map((item, index) => (
                <tr key={index}>
                    <td className='border border-slate-400 p-2 bg-blue-50'>
                        {item.projectName}
                    </td>
                    <td className='border border-slate-400 p-2 bg-blue-50'>
                        {item.client}
                    </td>
                    <td className='border border-slate-400 p-2 bg-blue-50'>
                        {item.contractor}
                    </td>
                    <td className='border border-slate-400 p-2 bg-blue-50'>
                        {item.projectDescription}
                    </td>
                    <td className='border border-slate-400 p-2 bg-blue-50'>
                        {item.max_x}
                    </td>
                    <td className='border border-slate-400 p-2 bg-blue-50'>
                        {item.min_x}
                    </td>
                    <td className='border border-slate-400 p-2 bg-blue-50'>
                        {item.max_y}
                    </td>
                    <td className='border border-slate-400 p-2 bg-blue-50'>
                        {item.min_y}
                    </td>
                    <td className='border border-slate-400 p-2 bg-blue-50'>
                        {item.max_z}
                    </td>
                    <td className='border border-slate-400 p-2 bg-blue-50'>
                        {item.min_z}
                    </td>
                </tr>
            ))
        }
        </tbody>
    </table>
    {data.length > 0 && <Button className='block mt-5 m-auto' onClick={generateAndDownloadPDF}>Download as Pdf</Button>}
    {data.length === 0 && <p className='p-3 text-red-500 text-center text-[1.4rem]'>No record found</p>}
    </Fragment>
  );
}
