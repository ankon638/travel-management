import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const storedUser = useLoaderData();

    const [user, setUser] = useState(storedUser);
    console.log(user)

    useEffect(() => {
        fetch('https://travel-service-server-zeta.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
    const handleUpdateUser = event => {
        event.preventDefault();

        const form = event.target;
        const review = form.review.value;
        const updatedReview = { reviewData: review }
        fetch(`https://travel-service-server-zeta.vercel.app/reviews/${storedUser._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount > 0) {
                    alert("User update successfully")

                }
                console.log(data)
            })

    }



    return (
        <div>
            <h2>Please Update: {storedUser.reviewData}</h2>
            <form onSubmit={handleUpdateUser}>
                <textarea name="review" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" defaultValue={storedUser.reviewData} required></textarea>
                <button type="submit">Update User</button>
            </form>
        </div>
    );
};

export default Update;