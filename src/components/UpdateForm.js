const UpdateForm = ({ updateData, changeTask, updateTask, cancelUpdate }) => {
    return(
        <>
          <div className='row'>
            <div className='col'>
              <input 
                className='form-control form-control-lg'
                value={updateData.title} //updateData &&
                onChange = {(e) => changeTask(e)}
              />
            </div>


            <div className='col-auto'>
              <button className='btn btn-lg btn-success mr-10'
                      onClick={updateTask}>
                Update
              </button>
              
              <button className='btn btn-lg btn-success'
                      onClick={cancelUpdate}>
                Cancel
              </button>
            </div>
          
          </div>
          <br></br>
        </>


    )
}

export default UpdateForm;