import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Grid, Menu } from 'semantic-ui-react'

const Menuheader = ({ siteTitle }) => {
return(
<>
<div class="ui secondary  menu">
  <a class="item">
    <i class="bars icon"></i>
  </a>
  <a class="item">
    MENU
  </a>
  <div class="left menu" style={{marginLeft: "35%"}}>
      BELMONT GRANGE
  </div>
  <div class="right menu">
    <a class="ui item">
      REGISTER
    </a>
  </div>
</div>
  </>
)
}

Menuheader.propTypes = {
  siteTitle: PropTypes.string,
}

Menuheader.defaultProps = {
  siteTitle: ``,
}

export default Menuheader
