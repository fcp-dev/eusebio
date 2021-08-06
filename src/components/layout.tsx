import React from 'react';
import { Helmet } from 'react-helmet';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { ThemeProvider } from '@material-ui/core';
import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';
import Header from '../components/header';
import Footer from '../components/footer';
import MobileHeader from './mobile-header';
import { isMobile } from '../utils/helper';
import '../styles/layout.scss';

interface LayoutProps {
  children?: any
}

export default function Layout({ children }: LayoutProps) {
  const { t } = useI18next();

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <>
      <Helmet>
        <title>{t("fullClubName")}</title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <div className="page-container">
          {isMobile() ?  <MobileHeader/> : <Header/>}
            <main className="content-wrap">
              <div className={isMobile() ? 'content-mobile' : 'content'}>
                {children}
              </div>
            </main>
          <Footer/>
        </div>
      </ThemeProvider>
    </>
  )
}