import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


const PledgeForm = (pledgeData) => {
    const [pledge, PostPledge] = useState(
        pledgeData.map
    );
    const { id } = useParams();
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { id, value } = event.target;
        PostPledge((PledgeData) => ({
        ...PledgeData,
        [id]: value,
        }));
    };

    const token = window.localStorage.getItem("token",);

    const SubmitPledge = async (event) => {
        event.preventDefault();

        if (token && pledge.amount && pledge.comment);
        try { 
            const response = await fetch(
            `${process.env.REACT_APP_API_URL}pledges/`,
            {
                method: "post",
                headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`,
            },
            body: JSON.stringify({
            amount: pledge.amount, 
            comment: pledge.comment,
            anonymous: true,
            project_id:parseInt(id)
            }),
        }
        );
        const data = await response.json();
        console.log(data)
        navigate(`/project/${id}`);
    } catch (err) {
            console.log(err);
        }
        
    };

    return (
        <form>
        <div>
        <label htmlFor="amount">Amount:</label>
        <input type="text" 
        id="amount" 
        placeholder="Enter $" 
        onChange={handleChange} />
        </div>
        <div>
        <label htmlFor="description">Comment:</label>
        <input type="text" 
        id="comment" 
        placeholder="enter a comment" 
        onChange={handleChange}/></div>
        <div>
        <label htmlFor="anonymous">Anonymous:</label>
        <input type="checkbox" 
        id="anonymous" 
        placeholder="enter a comment" 
        onChange={handleChange}/></div>
        <button type="submit" onClick={SubmitPledge}>submit</button>
        </form>

);

} 

export default PledgeForm;