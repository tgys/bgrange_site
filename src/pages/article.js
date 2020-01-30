import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Articlebanner from "../components/articlebanner"
import Article_1 from "../components/article_1"
import Article_2 from "../components/article_2"
import Article_3 from "../components/article_3"
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
import Bettylarge from "../components/bettylarge"



import SEO from "../components/seo"
import { Button } from 'semantic-ui-react'
import "../css/layout.css"
import "../css/alpha.css"

import { Container, Grid, Segment, Menu, Icon, Form } from 'semantic-ui-react'
import Helmet from 'react-helmet'

import Menuheader from "../components/menuheader"


const Article = () => (
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

				<section id="banner_article">
				</section>
            
                <div class="ui container" style={{width: "85%"}}>
					<section class="ui very padded segment" style={{zIndex: "1000", width: "100%"}}>
                        <div class="ui one column center aligned grid">
                            <div class ="column">
                            <div class="row" style={{marginTop: "5%"}}>
                                <h11>DEC 04,18</h11>
                            </div>
                            <div class="row" style={{marginLeft: "10%", marginRight: "10%", marginTop: "5%"}}>
                                <h22>
                                    CRAS MATTIS CONSECTETUR PURUS SIT AMET FERMENTUM. CRAS JUSTO ODIO, DAPIBUS.
                                </h22>
                            </div>
                            <div class="row" style={{marginLeft: "25%", marginRight: "25%", marginTop: "8%", textAlign: "left"}}>
                                <ha1>
                                    Curabitur blandit tempus porttitor. Nulla vitae elit libero, a pharetra augue. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo.

Nullam quis risus eget urna mollis ornare vel eu leo. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula porta felis euismod semper. Sed posuere consectetur est at lobortis. Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor.

Donec sed odio dui. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                </ha1>
                            </div>
                            <div class="row" style={{marginLeft: "17%", marginRight: "17%", marginTop: "13%"}}>
                                <div style={{ maxWidth: `858px`, marginBottom: `1.45rem` }}>
                                <Bettylarge />
                                </div>  
                            </div>
                            <div class="row" style={{marginLeft: "25%", marginRight: "25%", marginTop: "8%", marginBottom: "10%", textAlign: "left"}}>
                                <ha1>
                                    Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam quis risus eget urna mollis ornare vel eu leo. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                </ha1>
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



export default Article
