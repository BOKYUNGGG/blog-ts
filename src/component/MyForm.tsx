import React,{useState} from 'react';

type MyFormProps = {
    onSubmit: (form: { name: string; description: string }) => void;
}

const MyForm: React.FC<MyFormProps> = ({onSubmit}) =>{
    const [form, setForm] = useState({
        name : '',
        description : ''
    })
    // form data destructure allocation
    const {name, description} = form

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = e.target
        setForm({
            ...form,
            [name] : value
        })
        
    }
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        onSubmit(form)
        setForm({
            name : '',
            description : ''
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name='name' value={name} onChange={onChange}/>
                <input name='description' value={description} onChange={onChange} />
                <button type='submit'>등록</button>
            </form>    
        </div>
    )
  
}

export default MyForm