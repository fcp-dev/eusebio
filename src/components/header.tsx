import React from 'react';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import LanguageSelector from './language-selector';
import '../styles/header.scss';

export default function Header() {
  const { t } = useI18next();

  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/" className="utils-align-center">
          <img src="/img/logos/37x60.png"/>
        </Link>
      </div>
      <div className="header-divider"></div>
      <div className="header-nav-menu">
          <ul>
            <li>
              <Link to="/teams" className="nav-item utils-color-white" activeClassName="selected-nav-item" partiallyActive={true}>{t("teams")}</Link>
            </li>
            <li>
              <Link to="/club" className="nav-item utils-color-white" activeClassName="selected-nav-item">{t("club")}</Link>
            </li>
            <li>
              <Link to="/stadium" className="nav-item utils-color-white" activeClassName="selected-nav-item">{t("stadium")}</Link>
            </li>
            <li>
              <Link to="/sponsors" className="nav-item utils-color-white" activeClassName="selected-nav-item">{t("sponsors")}</Link>
            </li>
          </ul>
      </div>
      {/*
      <div className="header-language-selector">
        <LanguageSelector/>
      </div>
      */}
    </header>
  );
};