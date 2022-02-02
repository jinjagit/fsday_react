import { useFormInput } from './useFormInput.js';
import './App.css';

export const Form = () => {
  const first_name = useFormInput('Sue');
  const second_name = useFormInput('Brown');

  return (
    <div className='container'>
      <div className='row'>
        <input {...first_name} />
      </div>
      <div className='row'>
        <input {...second_name} />
      </div>
      <h1>{first_name.value} {second_name.value}</h1>
    </div>
  );
}