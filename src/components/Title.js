import React from 'react';

const Title = props => {
    return (
        <div>
             <h1>To Do list</h1>
            <p>Today's tasks: {props.dataList}</p>
        </div>
    );
}

export default Title;