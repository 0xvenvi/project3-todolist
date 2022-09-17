import {useState} from 'react';

import AddTaskForm from './components/AddTaskForm.js';
import UpdateForm from './components/UpdateForm.js';
import ToDo from './components/ToDo.js';




import './App.css';

function App() {

  //Tasks (ToDo List) State, true - close, false - open
  const [toDo, setToDo] = useState([
    {id: 1, title: "Task 1", status: true},
    {id: 2, title: "Task 2", status: false},
  ])

  //Temporary State
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');





  /*-------------------------------------------------------------------------------------------------*/
  //Add task



  const addTask = () => {
    
    //check for duplicate

      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      // what ever is inside + newEntry
      // const checkDuplicate = [...toDo].includes(newEntry.title) ? true : false;
      // console.log (checkDuplicate);

      // if(checkDuplicate){
      //   let errPrompt = prompt("Duplicate Entry");
      // }

      setToDo([...toDo, newEntry]);
      setNewTask('');
    





  }

  /*-------------------------------------------------------------------------------------------------*/
  //Delete task

  const deleteTask = (id) => {
    //filter all except that id and pass it to newTasks
    let newTasks = toDo.filter( task => task.id !== id)
    setToDo(newTasks);
  }



  
  /*-------------------------------------------------------------------------------------------------*/
  // Mark task as completed

  const markDone = (id) => {
    let newTask = toDo.map( task => {
      if(task.id === id ){
        // if it is true, make it false, if false, make it true
        return({...task, status: !task.status})
      }
        return task;
    })
    setToDo(newTask);
  }












  /*-------------------------------------------------------------------------------------------------*/
  // Change task for update

  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false 
    }

    setUpdateData(newEntry);

  }





  



  /*-------------------------------------------------------------------------------------------------*/
  //Update Task

  const updateTask = () => {
    let filterRecords = [...toDo].filter( task => task.id !== updateData.id);
    //exclude record with that id from temp state
    console.log(filterRecords);

    let updatedObject = [...filterRecords, updateData]


    setToDo(updatedObject);
    setUpdateData('');
    //make it empty
  }










    /*-------------------------------------------------------------------------------------------------*/
  //Cancel Update

  const cancelUpdate = () => {
    setUpdateData('');
  }





















  return (
    <div className="container App">
      
        <br></br>
        <h1>Project 3 - To Do List</h1>
        <br></br>

        {/* Display ToDos */}
        {
          //conditional rendering in react (cant use 'if' statement)
          //Ternary operator "?", if ToDo has value return ''; if false return 'No Tasks'
        toDo && toDo.length ? '' : 'No Tasks...' 
        }

        <ToDo 
        toDo={toDo}
        markDone={markDone}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
        />





        {/* Update Task */}
        {updateData ? (

          <UpdateForm
          updateData={updateData}
          changeTask={changeTask}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
          />
        ) : (
          <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
          />
        )}
        

        
      
      
    </div>
  );
}

export default App;
