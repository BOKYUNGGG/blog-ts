import React from 'react';
import Counter from './component/Counter';
import MyForm from './component/MyForm';


const App: React.FC = () =>{

  const onSubmit = (form: {name : string, description: string}) => {
    console.log(form)
  }
  return (
    <div>
      Hello, World
      <Counter/>
      <MyForm onSubmit={onSubmit}/>
    </div>
  )
  
}

export default App