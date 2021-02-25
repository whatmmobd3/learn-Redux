import React from 'react';

import Create from './components/Create/Create';
import People from './components/People/People';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Create aa={3}/>
        <People />
      </div>
    )
  }
}

export default App