import React, { useState } from 'react';
import TaskModal from './TaskModal';

const Home = () => {
    const [newTask, setNewTask] = useState(false);

    const handleAddTask = () => {
        setNewTask(true);
    }

    return (
        <div className='flex justify-center items-center  h-screen'>

            <label onClick={handleAddTask} htmlFor="add-task-modal" className="btn modal-button">Add New Task</label>
            {
                newTask && <TaskModal
                    setNewTask={setNewTask}
                ></TaskModal>
            }
        </div>

    );
};

export default Home;