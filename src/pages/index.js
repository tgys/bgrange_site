import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Bettylarge from "../components/bettylarge"
import Imagelarge from "../components/imagelarge"
import SEO from "../components/seo"
import { Button } from 'semantic-ui-react'
import Menuheader from "../components/menuheader"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
                
        <Menuheader></Menuheader>
        <Imagelarge></Imagelarge>
				<header id="header" class="alt">
					<h1><a href="index.html">Alpha</a> by HTML5 UP</h1>
				
				</header>

				<section id="main" class="container">

					<section class="box special">
						<header class="major">
							<h2>Introducing the ultimate mobile app
							<br />
							for doing stuff with your phone</h2>
							<p>Blandit varius ut praesent nascetur eu penatibus nisi risus faucibus nunc ornare<br />
							adipiscing nunc adipiscing. Condimentum turpis massa.</p>
						</header>
						<span class="image featured"><img src="images/pic01.jpg" alt="" /></span>
					</section>

				</section>

    <h4>Latest</h4>
    <h1>News</h1>
    <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
      <Bettylarge />
    </div>
    <Link to="/ind/">Go to page 2</Link>
  </Layout>
)



export default IndexPage
