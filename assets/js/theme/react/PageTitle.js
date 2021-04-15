import React from 'react';

// Local Impots

const PageTitle = (props) => {
  console.log("props", props); // eslint-disable-line
    return (
        <div className='PageTitle' >
            <h1 style={{ textAlign: 'center' }}>{props.title}</h1>
        </div>
    );
};

export default PageTitle;

