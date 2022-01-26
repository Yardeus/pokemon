import * as React from "react"
import PropTypes from "prop-types"
import * as s from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header className={s.container}  >

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
