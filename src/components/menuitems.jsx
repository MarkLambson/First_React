import React, {useState} from 'react'

const Menuitems = (props) => {
    let [likes, setLikes] = useState(props.likes)
    const {dishName, price} = props
    const addALike = () => {
        setLikes(likes + 1)
    }
    return (
        <div>
            <h1>Name: {dishName}</h1>
            <p>Price: ${price}</p>
            <p>Number of Likes: {likes}</p>
            <button className="btn btn-outline-info" onClick={addALike}>{dishName}</button>
            <hr />
        </div>
    )
}
export default Menuitems