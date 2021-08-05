import React from 'react';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import { Divider, IconButton, List, ListItem, ListItemText, SwipeableDrawer } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import LanguageSelector from './language-selector';
import '../styles/header.scss';

interface IListItem {
  path: string,
  title: string
}

const listItems: Array<IListItem> = [
  {path: '/', title: 'start'},
  {path: '/teams', title: 'teams'},
  {path: '/club', title: 'club'},
  {path: '/stadium', title: 'stadium'},
  {path: '/sponsors', title: 'sponsors'},
  {path: '/legal-notice', title: 'legalNotice'},
  {path: '/contact', title: 'contact'}
];

export default function Header() {
  const { t } = useI18next();

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event && event.type === 'keydown') {
      if (((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
        return;
      }
    }
    setOpen(isOpen);
  };

  return (
    <div>
      <header className="header">
        <div className="header-logo-mobile">
          <Link to="/">
            <img src="/img/logos/37x60.png"/>
          </Link>
        </div>
        <div className="header-menu-button-mobile">
          <IconButton onClick={toggleDrawer(true)}>
            <MenuIcon className="utils-color-white"/>
          </IconButton>
        </div>
        <div className="header-nav-menu">
        </div>
        <div className="header-language-selector">
          <LanguageSelector/>
        </div>
      </header>
      <SwipeableDrawer className="drawer" anchor="left" open={open} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}>
        <div className="drawer-header">
          <IconButton onClick={toggleDrawer(false)}>
            <ChevronLeftIcon className="utils-color-white"/>
          </IconButton>
        </div>
        <div className="drawer-list-container">
          <List>
            {listItems.map((listItem, index) => (
              <div key={index}>
                <div className="list-item">
                  <Link to={listItem.path} onClick={toggleDrawer(false)}>
                    <ListItem button>
                      <ListItemText>{t(listItem.title).toUpperCase()}</ListItemText>
                    </ListItem>
                  </Link>
                </div>
                <Divider/>
              </div>
            ))}
          </List>
        </div>
      </SwipeableDrawer>
    </div>
  );
};