import React from 'react';

const TaskModal = ({ setNewTask }) => {
    const handleAddTask = event => {
        event.preventDefault();
        const sub = event.target.subject.value;
        const details = event.target.detail.value;
        const newTaskObj = {
            subject: sub,
            details: details,
            status: "incomplete"
        }
        console.log(sub + details);
        setNewTask(false)

    }


    return (
        <div>
            {/* <label htmlFor="add-task-modal" className="btn modal-button">open modal</label> */}

            <input type="checkbox" id="add-task-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg my-4">Add New Task</h3>
                    <form onSubmit={handleAddTask}>
                        <div className="form-control w-full">
                            <label className="input-group input-group-sm my-3">
                                <span>Subject:</span>
                                <input type="text" name='subject' placeholder="Type here" maxLength={20} className="input input-bordered input-sm w-full" required />

                            </label>
                            <label className="input-group input-group-sm">
                                <span>Details: </span>
                                <input type="text" name='detail' placeholder="Type here" maxLength={200} className="input input-bordered input-sm w-full" required />

                            </label>
                        </div>

                        <div className="modal-action">
                            <input htmlFor="add-task-modal" type="submit" value="Add" className="btn" />

                        </div>


                    </form>
                </div>
            </div>
        </div >
    );
};

export default TaskModal;