import React, { Fragment } from 'react'
import Button from '../ui/button'

export default function ViewData({data}) {

    const generatePDF = () => {
        const pdfWindow = window.open();
        pdfWindow.document.write('<iframe width="100%" height="100%" src="data:application/pdf;base64,'); 

        pdfWindow.document.write('BASE64_ENCODED_PDF_CONTENTS" frameborder="0"></iframe>');
      }

  return (
    <Fragment>
        <table className='border-collapse border border-slate-500 w-[1200px] mt-10 m-auto bg-gray-200 text-left'>
        <tbody>
        <tr>
            <th className='border border-slate-700 p-2'>
                Project Name
            </th>
            <th className='border border-slate-700 p-2'>
                Client
            </th>
            <th className='border border-slate-700 p-2'>
                Contractor
            </th>
            <th className='border border-slate-700 p-2'>
                Project Description
            </th>
            <th className='border border-slate-700 p-2'>
                Max X
            </th>
            <th className='border border-slate-700 p-2'>
                Min X
            </th>
            <th className='border border-slate-700 p-2'>
                Max Y
            </th>
            <th className='border border-slate-700 p-2'>
                Min Y
            </th>
            <th className='border border-slate-700 p-2'>
                Max Z
            </th>
            <th className='border border-slate-700 p-2'>
                Min Z
            </th>
        </tr>
        {
            data.map((item, index) => (
                <tr key={index}>
                    <td className='border border-slate-700 p-2'>
                        {item.projectName}
                    </td>
                    <td className='border border-slate-700 p-2'>
                        {item.client}
                    </td>
                    <td className='border border-slate-700 p-2'>
                        {item.contractor}
                    </td>
                    <td className='border border-slate-700 p-2'>
                        {item.projectDescription}
                    </td>
                    <td className='border border-slate-700 p-2'>
                        {item.max_x}
                    </td>
                    <td className='border border-slate-700 p-2'>
                        {item.min_x}
                    </td>
                    <td className='border border-slate-700 p-2'>
                        {item.max_y}
                    </td>
                    <td className='border border-slate-700 p-2'>
                        {item.min_y}
                    </td>
                    <td className='border border-slate-700 p-2'>
                        {item.max_z}
                    </td>
                    <td className='border border-slate-700 p-2'>
                        {item.min_z}
                    </td>
                </tr>
            ))
        }
        </tbody>
    </table>
    {data.length > 0 && <Button className='block mt-5 m-auto' onClick={generatePDF}>Download as Pdf</Button>}
    {data.length === 0 && <p className='p-3 text-red-500 text-center text-[1.4rem]'>No record found</p>}
    </Fragment>
  )
}
