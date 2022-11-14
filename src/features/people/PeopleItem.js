import React from 'react';

function PeopleItem({ item }) {
  return (
    <div className="column is-4">
      <div className="card">
        <div className="card-content">
          <div className="media">
            {/* <div className="media-content"> */}
            <div>
              <p className='title is-4'>{item.name}</p>
              <p className='subtitle is-6'>Birth Date: {item.birth_year}</p>
            </div>
          </div>
          <div className="content">
            Mass: {item.mass}<br />
            Height: {item.height}<br />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PeopleItem;
