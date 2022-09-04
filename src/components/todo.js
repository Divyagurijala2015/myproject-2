import React,{useState} from 'react'
import Showtodo from './showtodo';
import './todo.css'

function Todo() {

    const [task,setTask] = useState("");

    const [data,setData] = useState([])

    const onChangeHandler = (e) =>{
        setTask(e.target.value)
        
    }

    const submitHandler = (e) =>{
       e.preventDefault();
    //    const newData = task;
       setData([...data,task])
       setTask('')

    }

    const deleteItem = (a) =>{

        const finalData = data.filter((curEle,index) =>{
            return index !== a;
        })

        setData(finalData)

    }
  return (
    <div className='container'>
        <div className='row justify-content-center align-items-center main-row'>
            <div className='col shadow main-col bg-white'>
                <div className='row bg-primary text-white'>
                    <div className='col p-2'>
                        <h4 className='text-center'>Todo App</h4>
                    </div>
                </div>

                <form action="" onSubmit={(e) =>submitHandler(e)}>
                    <div className='row justify-content-between text-white p-2'>
                        <div className='form-group flex-fill mb-2 col-9'>
                            <input type="text"  id="todo-list"  className='form-control' value={task} onChange={(e) =>onChangeHandler(e)}/>
                        </div>
                        <button type='submit' className='btn btn-primary mb-2 ml-2 col-3'>Add todo</button>
                    </div>
                </form>

                {
                    data.map((value,index) =>(
                        
                       <Showtodo
                       key={index}
                       id = {index}
                       task={value}
                       onSelect={deleteItem}

                       />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Todo