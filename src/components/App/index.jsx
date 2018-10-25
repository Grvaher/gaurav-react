import React from 'react';

import Navbar from '../Navbar';
import Banner from '../Banner';
import Categories from '../Categories';
import HotTickets from '../HotTickets';
import Links from '../Links';
import Footer from '../Footer';

class App extends React.Component {
  

 
 

  render() {
    
    return (
      <div>
          <Navbar/>
          <Banner/>
          <HotTickets/>
          <Categories/>
          <Links/>
          <Footer/>

        </div>
       )
};

}

export default App;