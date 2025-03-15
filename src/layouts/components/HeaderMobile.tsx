import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppBar, IconButton, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { navConfig } from 'src/routes/paths';

export function TemporaryDrawer() {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();

  const [state, setState] = React.useState<any>({
    left: false,
  });

  const toggleDrawer = (anchor: any, open: any) => (event: any) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: any) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {navConfig.map((group) => {
        return (
          <List
            id="list-sidebar"
            key={group.subheader}
            disablePadding
            sx={{ px: 2 }}
          >
            {group.items.map((item, index) => {
              const active = location.pathname === item.path;
              return (
                <ListItem
                  id="list-item-sidebar"
                  key={item.title + index}
                  disablePadding
                >
                  <ListItemButton onClick={() => navigate(`${item.path}`)}>
                    <ListItemText
                      disableTypography
                      primary={item.title}
                      sx={{
                        marginLeft: '10px',
                        fontSize: '14px',
                        color: active ? theme.palette.secondary.main : '',
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        );
      })}
    </Box>
  );

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: '#000', height: '50px' }}
      >
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer('left', true)}
        >
          <MenuIcon />
        </IconButton>

        {['left'].map((anchor: any) => {
          return (
            <React.Fragment key={anchor}>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          );
        })}
      </AppBar>
    </div>
  );
}
