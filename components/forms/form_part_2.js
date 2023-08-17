import React, {Fragment, useState} from 'react'
import Input from '../ui/input'

export default function FormPart_2(props) {
    const [data, setData] = useState({
      max_x: '',
      min_x: '',
      max_y: '',
      min_y: '',
      min_z: '',
      max_z: ''
  })

  const [selectedFile, setSelectedFile] = useState(null);
  const [csvData, setCSVData] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const contents = e.target.result;
        const rows = contents.split('\n');
        const parsedData = rows.map(row => row.split(','));
        setCSVData(parsedData);
      };
      reader.readAsText(file);
    }
  }
  console.log(csvData)
  return (
    <Fragment>
      <div className='grid grid-cols-2 gap-2'>
        <Input
            type='number'
            name='max X'
            value={data.max_x}
            onInput={e => {
                setData({...data, max_x: e})
                props.onInput({...data, max_x: e})
            }}
            placeholder='max X'
        />
        <Input
            type='number'
            name='min X'
            value={data.min_x}
            onInput={e => {
                setData({...data, min_x: e})
                props.onInput({...data, min_x: e})
            }}
            placeholder='min X'
        />
      </div>
      <div className='grid grid-cols-2 gap-2'>
        <Input
            type='number'
            name='max Y'
            value={data.max_y}
            onInput={e => {
                setData({...data, max_y: e})
                props.onInput({...data, max_y: e})
            }}
            placeholder='max Y'
        />
        <Input
            type='number'
            name='min Y'
            value={data.min_y}
            onInput={e => {
                setData({...data, min_y: e})
                props.onInput({...data, min_y: e})
            }}
            placeholder='min Y'
        />
      </div>
      <div className='grid grid-cols-2 gap-2'>
        <Input
            type='number'
            name='max Z'
            value={data.max_z}
            onInput={e => {
                setData({...data, max_z: e})
                props.onInput({...data, max_z: e})
            }}
            placeholder='max Z'
        />
        <Input
            type='number'
            name='min Z'
            value={data.min_z}
            onInput={e => {
                setData({...data, min_z: e})
                props.onInput({...data, min_z: e})
            }}
            placeholder='min Z'
        />
      </div>
      <div>
        <label htmlFor='csvUploader' className={`${ selectedFile ? 'bg-gray-50':'bg-blue-50'} p-3 block cursor-pointer border border-dashed rounded-md mb-4 w-full text-gray-500 text-center`}>
                {selectedFile ? 'File Uploaded' : 'Please Upload your csv file here'}
        </label>
        <input id='csvUploader' hidden type="file" accept=".csv" onChange={handleFileUpload} />
      </div>
    </Fragment>
  )
}
