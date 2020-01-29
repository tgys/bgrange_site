/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Grid, Menu } from 'semantic-ui-react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import Menuheader from "./menuheader"
import "../css/layout.css"
import 'semantic-ui-less/semantic.less'

const LinkedItem = ({ children, ...props }) => (
  <Menu.Item as={Link} activeClassName='active' {...props}>{children}</Menu.Item>
)
 
const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return(
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Menuheader></Menuheader>
        <Container>
          <Grid relaxed stackable>
            <Grid.Column mobile={16} tablet={80} computer={80}>
              {children}
            </Grid.Column>
          </Grid>
        </Container>
      </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
