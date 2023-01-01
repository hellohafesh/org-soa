// import React from 'react';
// import { Link } from 'react-router-dom';

// const Nav = () => {
//     const menuitem = <React.Fragment>
//         <li><Link to="/">Home</Link></li>
//         <li tabIndex={0}>
//             <Link>
//                 About
//                 <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
//             </Link>
//             <ul className="p-2  bg-base-300">
//                 <li><Link to="/"></Link></li>
//                 <li><Link to="/"></Link></li>
//                 <li><Link to="/"></Link></li>
//                 <li><Link to="/">Core Team</Link></li>
//                 <li><Link to="/"></Link></li>
//             </ul>
//         </li>
//         <li tabIndex={0}>
//             <Link>
//                
//                 <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
//             </Link>
//             <ul className="p-2  bg-base-300">
//                 <li><Link to="/"></Link></li>
//                 <li><Link to="/"></Link></li>
//                 <li><Link to="/"></Link></li>
//             </ul>
//         </li>
//         <li tabIndex={0}>
//             <Link>
//                 
//                 <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
//             </Link>
//             <ul className="p-2  bg-base-300">
//                 <li><Link to="/"></Link></li>
//                 <li><Link to="/">Event</Link></li>
//                 <li><Link to="/">News</Link></li>
//             </ul>
//         </li>

//         <li><Link to="/">Notice</Link></li>
//         <li><Link to="/login">Login</Link></li>
//     </React.Fragment>
//     return (
//         <div className="navbar bg-base-300">
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <label tabIndex={0} className="btn btn-ghost lg:hidden">
// <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                     </label>
//                     <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-36">
//                         {menuitem}
//                     </ul>
//                 </div>
// <Link to="/" className=""><img className='h-[55px] w-[58px]' src="https://i.ibb.co/3pRKnP0/307314424-385836870431319-3448937172785325094-n-1-removebg-preview.png" alt="" /></Link>
//             </div>

//             <div className="navbar-end"><div className="navbar-center hidden lg:flex">
//                 <ul className="menu menu-horizontal px-1">
//                     {menuitem}
//                 </ul>
//             </div>
//                 <Link to="/" className="btn btn-sm">Donate</Link>
//             </div>
//         </div>
//     );
// };

// export default Nav;






import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';




function Nav() {




    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [anchorElmenu, setAnchorElmenu] = React.useState(null);
    const [anchorElmenu1, setAnchorElmenu1] = React.useState(null);
    const [anchorElmenu2, setAnchorElmenu2] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleOpenSubMenu = (event) => {
        setAnchorElmenu(event.currentTarget);
    };
    const handleOpenSubMenu1 = (event) => {
        setAnchorElmenu1(event.currentTarget);
    };
    const handleOpenSubMenu2 = (event) => {
        setAnchorElmenu2(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleCloseSubMenu = () => {
        setAnchorElmenu(null);
    };
    const handleCloseSubMenu1 = () => {
        setAnchorElmenu1(null);
    };
    const handleCloseSubMenu2 = () => {
        setAnchorElmenu2(null);
    };



    const menuItem = <React.Fragment>
        <Link to={'/'}>
            <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center"><Button variant="contained">Home</Button></Typography>
            </MenuItem>
        </Link>
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open Details">
                <MenuItem onClick={handleOpenSubMenu}>
                    <Typography textAlign="center"><Button variant="contained">About</Button></Typography>
                </MenuItem>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElmenu}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElmenu)}
                onClose={handleCloseSubMenu}
            >
                <Link to={'/about'}>
                    <MenuItem onClick={handleCloseSubMenu}>
                        <Typography textAlign="center"><Button variant="contained">Our Organization</Button></Typography>
                    </MenuItem>
                </Link>
                <Link to={'/'}>
                    <MenuItem onClick={handleCloseSubMenu}>
                        <Typography textAlign="center"><Button variant="contained">Executive Committee</Button></Typography>
                    </MenuItem>
                </Link>
                <Link to={'/'}>
                    <MenuItem onClick={handleCloseSubMenu}>
                        <Typography textAlign="center"><Button variant="contained">National Team</Button></Typography>
                    </MenuItem>
                </Link>
                <Link to={'/'}>
                    <MenuItem onClick={handleCloseSubMenu}>
                        <Typography textAlign="center"><Button variant="contained">Core Team</Button></Typography>
                    </MenuItem>
                </Link>
                <Link to={'/'}>
                    <MenuItem onClick={handleCloseSubMenu}>
                        <Typography textAlign="center"><Button variant="contained">Our Volunteer</Button></Typography>
                    </MenuItem>
                </Link>
            </Menu>
        </Box>
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open Details">
                <MenuItem onClick={handleOpenSubMenu1}>
                    <Typography textAlign="center"> <Button variant="contained">Get Involved</Button></Typography>
                </MenuItem>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElmenu1}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElmenu1)}
                onClose={handleCloseSubMenu1}
            >
                <Link to={'/'}>
                    <MenuItem onClick={handleCloseSubMenu1}>
                        <Typography textAlign="center"><Button variant="contained">Sponsor a Child</Button></Typography>
                    </MenuItem>
                </Link>
                <Link to={'/'}>
                    <MenuItem onClick={handleCloseSubMenu1}>
                        <Typography textAlign="center"><Button variant="contained">Apply For Volunteer</Button></Typography>
                    </MenuItem>
                </Link>
                <Link to={'/'}>
                    <MenuItem onClick={handleCloseSubMenu1}>
                        <Typography textAlign="center"><Button variant="contained">Apply For Partnership</Button></Typography>
                    </MenuItem>
                </Link>

            </Menu>
        </Box>
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open Details">
                <MenuItem onClick={handleOpenSubMenu2}>
                    <Typography textAlign="center"> <Button variant="contained">Activity</Button></Typography>
                </MenuItem>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElmenu2}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElmenu2)}
                onClose={handleCloseSubMenu2}
            >
                <Link to={'/'}>
                    <MenuItem onClick={handleCloseSubMenu2}>
                        <Typography textAlign="center"><Button variant="contained">Our Projects</Button></Typography>
                    </MenuItem>
                </Link>
                <Link to={'/'}>
                    <MenuItem onClick={handleCloseSubMenu2}>
                        <Typography textAlign="center"><Button variant="contained">Event</Button></Typography>
                    </MenuItem>
                </Link>
                <Link to={'/'}>
                    <MenuItem onClick={handleCloseSubMenu2}>
                        <Typography textAlign="center"><Button variant="contained">News</Button></Typography>
                    </MenuItem>
                </Link>

            </Menu>
        </Box>
        <Link to={'/'}>
            <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center"><Button variant="contained">Notice</Button></Typography>
            </MenuItem>
        </Link>
    </React.Fragment>
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link to="/" className=""><img className='h-[55px] w-[58px]' src="https://i.ibb.co/3pRKnP0/307314424-385836870431319-3448937172785325094-n-1-removebg-preview.png" alt="" /></Link>


                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {menuItem}
                        </Menu>
                    </Box>



                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {menuItem}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <MenuItem onClick={handleOpenUserMenu}>
                                <Typography textAlign="center"><Button variant="contained">Donate</Button></Typography>

                            </MenuItem>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <Link to={'/login'}>
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center"><Button variant="contained">Log In</Button></Typography>
                                </MenuItem>
                            </Link>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Nav;