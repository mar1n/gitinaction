import React from 'react';

import getActivity from './activity-get.js';
import Sport from './Sport.js';

export default function Activity() {
  return (
    <div>
      <h1>Hellow change</h1>
      <div className='containter'>
        {
          getActivity().map(activity => (
            <Sport key={activity.name} id={activity.id} name={activity.name} picture={activity.logo} />
          ))
        }
      </div>
    </div>
  );
}

