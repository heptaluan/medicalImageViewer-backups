import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Dropdown, AboutContent, withModal } from '@ohif/ui'
//
import { UserPreferences } from './../UserPreferences'
import OHIFLogo from '../OHIFLogo/OHIFLogo.js'
import './Header.css'

function Header(props) {
  const {
    t,
    user,
    userManager,
    modal: { show },
    useLargeLogo,
    linkPath,
    linkText,
    location,
    children,
  } = props

  const [options, setOptions] = useState([])
  const hasLink = linkText && linkPath

  useEffect(() => {
    const optionsValue = [
      {
        title: t('About'),
        icon: { name: 'info' },
        onClick: () =>
          show({
            content: AboutContent,
            title: t('OHIF Viewer - About'),
          }),
      },
      {
        title: t('Preferences'),
        icon: {
          name: 'user',
        },
        onClick: () =>
          show({
            content: UserPreferences,
            title: t('User Preferences'),
          }),
      },
    ]

    if (user && userManager) {
      optionsValue.push({
        title: t('Logout'),
        icon: { name: 'power-off' },
        onClick: () => userManager.signoutRedirect(),
      })
    }

    setOptions(optionsValue)
  }, [setOptions, show, t, user, userManager])

  return (
    <>
      <div className="header-box">姓名：CHEN FANG 患者编号：90223232 性别：F 年龄：80 检查日期：2021-05-06</div>
    </>
  )
}

Header.propTypes = {
  // Study list, /
  linkText: PropTypes.string,
  linkPath: PropTypes.string,
  useLargeLogo: PropTypes.bool,
  //
  location: PropTypes.object.isRequired,
  children: PropTypes.node,
  t: PropTypes.func.isRequired,
  userManager: PropTypes.object,
  user: PropTypes.object,
  modal: PropTypes.object,
}

Header.defaultProps = {
  useLargeLogo: false,
  children: OHIFLogo(),
}

export default withTranslation(['Header', 'AboutModal'])(withRouter(withModal(Header)))