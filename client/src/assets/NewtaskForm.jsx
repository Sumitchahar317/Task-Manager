import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

const NewtaskForm = () => {
    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handelSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`${API_URL}/api/tasks/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title,
                    description,
                    isCompleted: status
                })
            });

            const json = await res.json();

            if (res.ok) {
                setTitle("");
                setDescription("");
                setStatus("");
                setError(null);
                navigate('/');
            } else {
                setError(json.Error || "Failed to add task");
            }

        } catch {
            setError("Could not connect to the backend server.");
        }
    }

    return (
        <form className='form-box' onSubmit={handelSubmit}>
            <h2>Enter details for new task </h2>

            {error && <div className="alert alert-danger mt-2">{error}</div>}
            <div className="form-floating mb-3">

                <input className="form-control" id="floatingInput" placeholder="Enter title:" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label htmlFor="floatingInput">Title </label>
            </div>
            <div className="form-floating">

                <input className="form-control" id="floatingDes" placeholder="Enter description :" value={description} onChange={(e) => setDescription(e.target.value)} />
                <label htmlFor="floatingDes">Description</label>
            </div>
            <div className="form-floating mt-3">

                <select className="form-select" id="floatingSelect" aria-label="Floating label select example" value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="" disabled>Select status of task </option>
                    <option value="true">completed</option>
                    <option value="false">pending</option>
                </select>
                <label htmlFor="floatingSelect">Select status of task</label>

            </div>
            <button type="submit" className=" mt-3 btn btn-success">Submit</button>
        </form>
    )
}

export default NewtaskForm;
