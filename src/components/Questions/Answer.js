import React from 'react';

const Answer = () => {
    return (
        <div className='text-center'>
            <h1>QUESTIONS AND ANSWERS</h1>
             <h4>1: How react works ?</h4>
             <p >React is  synchronised! This means that when our code is run in the browser,<br /> the browser engine reads the code from the top of the file at once and then goes downwards. <br /> We can't sent nothing above</p>
             <h4>2: Porps vs State ?</h4>
             <h5>Props</h5>
             <p>Props are used to pass data from one component to another</p>
             <h5>State</h5>
             <p>State are used to change data in user interface. </p>
        </div>
    );
};

export default Answer;