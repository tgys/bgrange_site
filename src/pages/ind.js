import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Top_1 from "../components/top_1"
import Top_2 from "../components/top_2"
import Top_3 from "../components/top_3"
import Two_1 from "../components/two_1"
import Two_2 from "../components/two_2"
import Two_3 from "../components/two_3"
import Three_1 from "../components/three_1"
import Three_2 from "../components/three_2"
import Three_3 from "../components/three_3"
import Four_1 from "../components/four_1"
import Four_2 from "../components/four_2"
import Four_3 from "../components/four_3"



import SEO from "../components/seo"
import { Button } from 'semantic-ui-react'
import "../css/layout.css"
import "../css/alpha.css"

import { Container, Grid, Segment, Menu, Icon, Form } from 'semantic-ui-react'
import Helmet from 'react-helmet'

import Menuheader from "../components/menuheader"


const Ind = () => (
                <>
                
				<header id="header" class="alt">
                
                    <div class="ui secondary menu" style={{padding: "1%"}}>
  <a class="item">
    <i class="bars icon" style={{color: "white"}}></i>
  </a>
  <a class="item">
    <h4>MENU</h4>
  </a>
  <div class="left menu" style={{marginLeft: "34%"}}>

      <div class="ui centered grid">
         <div class="row" style={{margin: "0", height: "5%", padding: "0"}}>
             <h3 style={{margin: "0", textAlign: "center"}}>BELMONT</h3>

         </div>
         <div class="row" style={{margin: "0", padding: "0"}}>
             <h3 style={{margin: "0", textAlign: "center"}}>GRANGE</h3>

         </div>
      </div>
            </div>
  <div class="right menu">
    <a class="ui item">
      <h4>REGISTER</h4>
    </a>
  <a class="item">
    <i class="key icon" style={{color: "white"}}></i>
  </a>
  </div>
</div>
  
				</header>

				<section id="banner">
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h5>LATEST</h5>
					<h2>NEWS</h2>
				</section>
            
                <div class="ui container" style={{width: "85%"}}>
					<section class="ui very padded segment" style={{zIndex: "1000", width: "100%"}}>
                        <div class="ui three column center aligned grid">
                            <div class="row">
                                <br></br>
                            </div>
                            <div class="row">
                                <br></br>
                            </div>

                            <div class="row">
                              <div class="column">
                                <div class="column">
                                <h11>DEC 20,18</h11>
                                <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
                                <Top_1 />
                                </div> 
                                <h21>
                                    ETIAM PORTA SEM MALESUADA MAGNA MOLLIS EUISMOD.
                                </h21>
                                </div> 
                              </div>
                              <div class="column">
                                <div class="column">
                                <h11>DEC 04,18</h11>
                                <br></br>
                                <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
                                <Top_2 />
                                </div>  
                                <h21>
                                    CRAS MATTIS CONSECTETUR PURUS SIT AMET FERMENTUM. CRAS JUSTO ODIO, DAPIBUS.
                                </h21>

                              </div>
                              </div>
                              <div class="column">
                                <div class="column">
                                <h11>NOV 16,18</h11>
                                <br></br>
                                <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
                                <Top_3 />
                                </div>  
                                <h21>
                                    LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.
                                </h21>


                              </div>
                              </div>
                              </div>
                            <div class="row">
                                <br></br>
                            </div>
                            <div class="row">
                              <div class="column">
                                <div class="column">
                                <h11>DEC 20,18</h11>
                                <br></br>
                                <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
                                <Two_1 />
                                </div> 
                                <h21>
                                    ETIAM PORTA SEM MALESUADA MAGNA MOLLIS EUISMOD.
                                </h21> 
                                </div>
                              </div>
                              <div class="column">
                                <div class="column">
                                <h11>DEC 04,18</h11>
                                <br></br>
                                <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
                                <Two_2 />
                                </div>  
                                <h21>
                                    CRAS MATTIS CONSECTETUR PURUS SIT AMET FERMENTUM. CRAS JUSTO ODIO, DAPIBUS.
                                </h21> 

                                </div>
                              </div>
                              <div class="column">
                                <div class="column">
                                <h11>NOV 16,18</h11>
                                <br></br>
                                <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
                                <Two_3 />
                                </div>  
                                <h21>
                                    LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.
                                </h21> 

                                </div>
                              </div>
                            </div>

                            <div class="row">
                                <br></br>
                            </div>
                            <div class="row">
                              <div class="column">
                                <div class="column">
                                <h11>DEC 20,18</h11>
                                <br></br>
                                <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
                                <Three_1 />
                                </div>  
                                <h21>
                                    ETIAM PORTA SEM MALESUADA MAGNA MOLLIS EUISMOD.
                                </h21> 

                                </div>
                              </div>
                              <div class="column">
                                <div class="column">
                                <h11>DEC 04,18</h11>
                                <br></br>
                                <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
                                <Three_2 />
                                </div>  
                                <h21>
                                    CRAS MATTIS CONSECTETUR PURUS SIT AMET FERMENTUM. CRAS JUSTO ODIO, DAPIBUS.
                                </h21> 
                                </div>
                              </div>
                              <div class="column">
                                <div class="column">
                                <h11>NOV 16,18</h11>
                                <br></br>
                                <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
                                <Three_3 />
                                </div>  
                                <h21>
                                    LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.
                                </h21> 
                                </div>
                              </div>
                            </div>

                            <div class="row">
                                <br></br>
                            </div>

                            <div class="row">
                              <div class="column">
                                <div class="column">
                                <h11>DEC 20,18</h11>
                                <br></br>
                                <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
                                <Four_1 />
                                </div>  
                                <h21>
                                    ETIAM PORTA SEM MALESUADA MAGNA MOLLIS EUISMOD.
                                </h21> 
                                </div>
                              </div>
                              <div class="column">
                                <div class="column">
                                <h11>DEC 04,18</h11>
                                <br></br>
                                <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
                                <Four_2 />
                                </div> 
                                <h21>
                                    CRAS MATTIS CONSECTETUR PURUS SIT AMET FERMENTUM. CRAS JUSTO ODIO, DAPIBUS.
                                </h21> 
                                </div>
                              </div>
                              <div class="column">
                                <div class="column">
                                <h11>NOV 16,18</h11>
                                <br></br>
                                <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
                                <Four_3 />
                                </div>  
                                <h21>
                                    LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.
                                </h21> 
                                </div>
                              </div>
                            </div>


                        </div>
					</section>

                </div>

                <div class="ui basic very padded segment container">
                    <div class="ui two column padded divided grid">
                        <div class="row">
                       <div class="column">
  

<form class="ui form" style={{marginRight: "20%", marginTop: "15%"}}>
  <div class="field" >
    <input style={{backgroundColor: "#E6E5E1", fontFamily: "Nolan Medium", fontSize: "9pt", padding: "3.5%"}} type="text" name="first-name" placeholder="TITLE"></input>
  </div>
  <div class="field">
    <input style={{backgroundColor: "#E6E5E1", fontFamily: "Nolan Medium", fontSize: "9pt", padding: "3.5%"}} type="text" name="last-name" placeholder="NAME"></input>
  </div>
  <div class="field">
    <input style={{backgroundColor: "#E6E5E1", fontFamily: "Nolan Medium", fontSize: "9pt", padding: "3.5%"}} type="text" name="email-address" placeholder="EMAIL ADDRESS"></input>
  </div>
  <div class="field">
    <input style={{backgroundColor: "#E6E5E1", fontFamily: "Nolan Medium", fontSize: "9pt", padding: "3.5%"}} type="text" name="telephone" placeholder="TELEPHONE"></input>
  </div>
</form>

                      </div>
                      <div class="column">
                      <div class="basic very padded center aligned segment">
                          <div class="ui three row centered grid">
                              <div class="row">
                          <h24 style={{marginLeft: "20%"}}>UPDATES</h24>
                          </div>
                          <div class="row">
                          <br></br>
                          <h22 style={{marginLeft: "20%"}}>JOIN THE<br></br>CLUB</h22> 
                          <br></br>
                          </div>
                          <div class="row">
                              <div class="basic segment" style={{marginLeft: "20%"}}>
                          <h21>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac habitasse platea dictumst quisque sagittis purus. Eget nunc lobortis mattis aliquam faucibus purus in. Dolor sit amet consectetur. 
                          </h21>  
                              </div>
                          </div> 
                          </div> 
                      </div>     
                      </div>
    </div>
             <div class="center aligned row">
                 <div class="centered column">
                 <button id="bbutton" class="ui orange basic button" type="submit"><h24>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SUBMIT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h24></button>
                 </div>
             </div>
  </div>
               </div>


               <div class="ui container" style={{backgroundColor: "#26203A", height: "650px", width: "100%", marginBottom: "0"}}>

                   <div class="ui basic segment" style={{width: "70%", top: "10%", margin: "10%", marginLeft: "15%"}}>
                       <div class="ui three column center aligned grid">
                           <div class="row">
                           <div class="four wide column">
                               <div class="ui vertical text menu">
                                 <a class="item">
                                    <h24>LOCATION</h24>
                                 </a>
                                 <a class="item"> 
                                    <h24>DEVELOPMENT</h24>
                                 </a>
                                 <a class="item">
                                    <h24>LIFESTYLE</h24>
                                 </a> 
                                 <a class="item">
                                    <h24>TEAM</h24>
                                 </a>


                                </div>
                           </div>
                           <div class="six wide column">
                              <h23>ROSSETT GREEN LANE</h23>
                              <br></br>
                              <h22>BELMONT <h23>20</h23>GRANGE</h22><h23>19</h23>
                              <br></br>
                              <h23>HARROGATE</h23>
                           </div>

                           <div class="four wide column">
                                <div class="ui vertical text menu">
                                 <a class="item">
                                    <h24>CONTACT</h24>
                                 </a>
                                 <a class="item"> 
                                    <h24>NEWS</h24>
                                 </a>
                                 <a class="item">
                                    <h24>REGISTER</h24>
                                 </a> 
                                 <a class="item">
                                    <h24>TERMS</h24>
                                 </a>


                                </div>
                                

                           </div>

                           </div>
                           </div>
                           <div style={{marginTop: "5%"}} class="one column left aligned grid">

                           <div class="row">
                                    <form class="ui form">
                                     <div class="field">
                                        <input style={{borderBottomColor: "#C17A62",backgroundColor: "#26203A", fontFamily: "Parasupreme Regular"}} type="text" name="telephone" placeholder="Your Email Address"></input>
                                      </div>
                                    </form>
                           </div>
                       </div>
                       <div style={{marginLeft: "3%", marginTop: "3%", marginBottom: "0", bottom: "0"}} class="ui three column center aligned grid">
                           <div class="row">
                           <div class="one wide column"></div> 
                           <div class="column">
                               <div class="ui secondary five item vertically fitted icon menu">
                                      <a class="item">
                                        <i style={{color: "#C17A62"}} class="instagram icon"></i>
                                      </a>
                                      <a class="item">
                                        <i style={{color: "#C17A62"}} class="twitter icon"></i>
                                      </a>
                                      <a class="item">
                                        <i style={{color: "#C17A62"}} class="facebook icon"></i>
                                      </a>
                                      <a class="item">
                                        <i style={{color: "#C17A62"}} class="linkedin icon"></i>
                                      </a>
                                      <a class="item">
                                        <i style={{color: "#C17A62"}} class="youtube icon"></i>
                                      </a>


                                    </div>
                           </div>
                           <div class="two wide column"></div> 

                       </div>
                       </div>

                       </div>




               </div>
                </>

)



export default Ind
