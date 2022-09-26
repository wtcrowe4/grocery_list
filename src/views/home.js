import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Home () {
  const [value, setValue] = useState(new Date());

  function onChange(nextValue) {
    setValue(nextValue);
  }

  return (
    
    <div className="Calendar">
      <div>
        <Calendar onChange={onChange} value={value} />
      </div>
    </div>

  );
}

export default Home;

