import React, { useState } from 'react'

const ReadMoreReadLess = ({ children }) => {

    const [isReadMore, setIsReadMore] = useState(false);


    return (
        <div className='read-more-read-less'>
            {isReadMore ? children : children.substr(0, 20)}
            <button> Read More </button>
        </div>
    )
}

export default ReadMoreReadLess;