import {useState} from 'react';
import {Box, IconButton, MenuItem, Tooltip, Typography} from '@mui/material'
import Menu from '@mui/material/Menu';
import avatarImg from "../../assets/images/avatar.jpg";
import {MdEmail, MdOutlineSpaceDashboard, MdLogout} from "react-icons/md";
import {Link} from 'react-router-dom';



const MenuOption = () => {
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Box sx={{flexGrow: 0}}>
            <Tooltip title="ওপেন মেন্যু">
                <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                    <img src={avatarImg} alt="avatar image" className='w-8 rounded-full' />
                </IconButton>
            </Tooltip>
            <Menu
                sx={{mt: '45px'}}
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

                <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="left"><Link to=""><span className='flex items-center gap-2 text-sm'><MdEmail /> প্রোফাইল </span></Link></Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="left"><Link to=""><span className='flex items-center gap-2 text-sm'><MdOutlineSpaceDashboard /> ড্যাশবোর্ড </span></Link></Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="left"><Link to=""><span className='flex items-center gap-2 text-sm'><MdLogout /> লগআউট </span></Link></Typography>
                </MenuItem>
            </Menu>
        </Box>
    );
};

export default MenuOption;