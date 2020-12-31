import React from 'react';
import {Route,Switch} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Menu from './Menu';
import Service from './Service';

const  App = () => {

    const Name = () =>{
        return <h1>hello , i am a name page</h1>;
    }
    return(
        <>
         <Menu/>
           <Switch>
               <Route exact path='/' component={()=><About name="Meraj"/>} />
               <Route exact path="/service" component={()=><Service name="Edit" />} />
               <Route path='/contact' component={ ()=><Contact num="9905971098"/>} />
               <Route path='/contact/Name' component={Name}/>
               <Route component={Error} />
           </Switch>
           {/* <About/>
            <Contact/> */ }
        </>
    );
}

export default App;