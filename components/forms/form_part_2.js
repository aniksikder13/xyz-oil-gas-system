import { Fragment, useState } from 'react';
import Input from '../ui/input';

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

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const contents = e.target.result;
        const rows = contents.split('\n');
        const header = rows[0].split(',');

        const kpIndex= header.indexOf('KP');
        const xIndex = header.indexOf('X');
        const yIndex = header.indexOf('Y');
        const zIndex = header.indexOf('Z');

        const parsedData = rows.slice(1).map(row => {
          const cells = row.split(',');
          return {
            KP: parseFloat(cells[kpIndex]) || 0,
            X: parseFloat(cells[xIndex]) || 0,
            Y: parseFloat(cells[yIndex]) || 0,
            Z: parseFloat(cells[zIndex]) || 0
          };
        });

        console.log(parsedData);

        const maxX = Math.max(...parsedData.map(row => row.X));
        const maxY = Math.max(...parsedData.map(row => row.Y));
        const maxZ = Math.max(...parsedData.map(row => row.Z));
        const minX = Math.min(...parsedData.map(row => row.X));
        const minY = Math.min(...parsedData.map(row => row.Y));
        const minZ = Math.min(...parsedData.map(row => row.Z));

        setData({
          ...data,
          max_x: maxX,
          min_x: minX,
          max_y: maxY,
          min_y: minY,
          max_z: maxZ,
          min_z: minZ
        })
        props.onInput({
          ...data,
          max_x: maxX,
          min_x: minX,
          max_y: maxY,
          min_y: minY,
          max_z: maxZ,
          min_z: minZ
        })
      }
      reader.readAsText(file);
    }
  };

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
