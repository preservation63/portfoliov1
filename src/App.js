import React, { Component } from "react";
import "./navbar.css";
import { bubble as Menu } from 'react-burger-menu';
import ScrollspyNav from "react-scrollspy-nav";
import Scroll1 from "./Scroll.js";
import { TypeAnimation } from 'react-type-animation';
import "./bld.css";
import App2 from "./sb2";
import "./scroll.css"





 
    

   
class App extends React.Component {
  render() {
    

                
                


      return (

        <div>
                    
                    <ScrollspyNav
                    scrollTargetIds={[ "section_1", "section_2", "section_3"]}
                    offset={0}
                    activeNavClass="is-active"
                    scrollDuration="700"
                    headerBackground="true">


                    <Menu className="mb2">
                        <a className="menu-item mb1 m1"
                        href=""><span>Home</span></a>
                        <a className="menu-item mb1 m1" 
                        href="#section_1"><span>About Me</span></a>
                        <a className="menu-item mb1 m1" 
                        href="#section_2"><span>My Projects</span></a>
                        <a className="menu-item--small mb1 m1" 
                        onClick={ this.showSettings }
                        href="#section_3"><span>Contact Me</span>
                        </a>
                  </Menu>
                    </ScrollspyNav>

                    


                    <div className="gradient nav1 bg1">My Portfolio</div>

                   
                      <div className="cards">

                                      <div className="between tx">
                                      <TypeAnimation
                                      sequence={[
                                        'Hello', // Types 'One'
                                        1000, // Waits 1s
                                        'JavaScript is cool', // Deletes 'One' and types 'Two'       
                                        2000, // Waits 2s
                                        'JavaScript is cool and CSS too'
                                        ,// Types 'Three' without deleting 'Two'
                                        
                                        
                                        1000,
                                        "I like",
                                        1000,
                                        "I like frontend so much",
                                        1000,
                                        () => {
                                          console.log('Done typing!'); // Place optional callbacks anywhere in the array
                                        }
                                      ]}
                                      wrapper="div"
                                      cursor={true}
                                      repeat={Infinity}
                                      style={{ fontSize: '5em' }}
                                      />


                                      </div>


                                    <div id="section_1" className="about between">

                                    <Scroll1>
                                    <div className="textab">
                                    <div className="fw">
                                    About Me
                                    </div>
                                    <div className="">
                                    <App2 />
                                    </div>
                                    
                                    




                                    </div>


                                    


                                    </Scroll1>
                                    </div>



                                    <div class="container between bld1">
                                              <div class="sky">
                                                <div class="s1"></div>
                                                <div class="s2"></div>
                                                <div class="s3"></div>
                                              </div>
                                              <div class="b1">
                                                <div class="bb1"></div>
                                                <div class="bb2"></div>
                                                <div class="bb3"></div>
                                                <div class="bb4"></div>
                                                <div class="bb5"></div>
                                              </div>
                                              <div class="b2">
                                                <div class="cc1">
                                                  <div class="ccc1"></div>
                                                  <div class="ccc2"></div>
                                                  <div class="ccc3"></div>
                                                  <div class="ccc4"></div>
                                                  <div class="ccc5"></div>
                                                  <div class="ccc6"></div>
                                                  <div class="ccc7"></div>
                                                  <div class="ccc8"></div>
                                                  <div class="ccc9"></div>
                                                </div>
                                                <div class="cc2">
                                                  <div class="cccc1"></div>
                                                  <div class="cccc2"></div>
                                                  <div class="cccc3"></div>
                                                  <div class="cccc4"></div>
                                                  <div class="cccc5"></div>
                                                </div>
                                                <div class="cc3"></div>
                                                <div class="cc4"></div>
                                                <div class="cc5"></div>
                                                <div class="cc6"></div>
                                                <div class="cc7"></div>
                                                <div class="cc8"></div>
                                                <div class="cc9"></div>
                                                <div class="cc10"></div>
                                              </div>
                                              <div class="b3">
                                                <div class="dd1">
                                                  <div class="ddd1"></div>
                                                  <div class="ddd2"></div>
                                                  <div class="ddd3"></div>
                                                  <div class="ddd4"></div>
                                                  <div class="ddd5"></div>
                                                  <div class="ddd6"></div>
                                                </div>
                                                <div class="dd2"></div>
                                                <div class="dd3"></div>
                                                <div class="dd4"></div>
                                                <div class="dd5"></div>
                                              </div>
                                              <div class="b4">
                                                <div class="ee1"></div>
                                                <div class="ee2"></div>
                                                <div class="ee3">
                                                  <div class="eee1"></div>
                                                  <div class="eee2"></div>
                                                  <div class="eee3"></div>
                                                  <div class="eee4"></div>
                                                </div>
                                                <div class="ee4"></div>
                                                <div class="ee5"></div>
                                                <div class="ee6"></div>
                                                <div class="ee7"></div>
                                                <div class="ee8"></div>
                                                <div class="ee9"></div>
                                              </div>
                                              <div class="b5"></div>
                                              <div class="b6"></div>
                                              <div class="b7">
                                                <div class="ff1"></div>
                                                <div class="ff2"></div>
                                              </div>
                                              <div class="b8"></div>
                                              <div class="b9"></div>
                                              <div class="b10"></div>
                                    </div>


                                    <div id="section_2" className="proj between">
                                    <Scroll1>
                                    <div className="textab">
                                    <div className="fw">
                                    My Projects
                                    </div>
                                    </div>
                                    <div className="projtx">
                                    1.RoboFriends
                                    </div>
                                    <div className="projects">
                                    <a href="https://preservation63.github.io/rf/">
                                    <img src="https://robohash.org/2%7Bid%7D?100x100" />
                                    </a>
                                    </div>
                                    </Scroll1>
                                    </div>

                      </div>            


                                    

                                    <div id="section_3" className="cont gml"><p className="ls2">
                                    preservation63@gmail.com
                                    </p></div>


                           

                                      

                                                                



      
                

        
        


        </div>
      );
    }
  }


export default App;