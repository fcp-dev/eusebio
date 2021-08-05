import React from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { Button, Menu, MenuItem } from "@material-ui/core";
import LanguageIcon from '@material-ui/icons/Language';

export default function LanguageSelector() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { language, changeLanguage } = useI18next();

  const selectedLanguage: string = language || 'de';

  return (
    <div>
      <Button className="utils-color-white" onClick={handleClick}>
        <LanguageIcon fontSize="small"/> {selectedLanguage.toUpperCase()}
      </Button>
      <Menu 
        id="language-selector"
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        open={Boolean(anchorEl)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        disableScrollLock={true}
        onClose={handleClose}
        keepMounted
      >
        <MenuItem onClick={() => changeLanguage("de")}>Deutsch</MenuItem>
        <MenuItem onClick={() => changeLanguage("pt")}>Português</MenuItem>
      </Menu>
    </div>
  );
}
