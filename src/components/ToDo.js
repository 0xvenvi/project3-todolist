import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const ToDo = ({ toDo, markDone, setUpdateData, deleteTask  }) => {
    return(
        <>
        {toDo
      
      .sort((a,b) => a.id > b.id ? 1: -1) //not needed but nice to have
      .map(

        (task, index) => {
          return(
            <div key={task.id}>
              <div className = "col taskBg">
                {/* if task.status is true then make its className as .done */}
                <div className={task.status ? 'doneStyle' : ''}>
                  <span className='taskNumber'> {index + 1}</span>  
                  <span className='taskText'> {task.title}</span> 
                </div>

                <div className = 'iconsWrap'>



                  {task.status ? null :(

                    <span title="Edit"
                      onClick = { () => setUpdateData({
                        id: task.id,
                        title: task.title,
                        status: task.status ? true : false
                      })}>


                      <FontAwesomeIcon icon={faPen} />
                    </span>

                  )}


                  <span title="Completed / Not Completed"
                        onClick={(e) => markDone(task.id)}>
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>


                  <span title="Delete"
                        onClick={() => deleteTask(task.id)}>
                    <FontAwesomeIcon icon={faTrashCan} />
                  </span>



                </div>

              </div> 
            </div>
          )
        }

      )}
        
        </>

    )
}

export default ToDo;