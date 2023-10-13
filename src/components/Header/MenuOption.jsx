import {useState} from 'react';
import {Box, IconButton, MenuItem, Tooltip, Typography} from '@mui/material'
import Menu from '@mui/material/Menu';
import avatarImg from "../../assets/images/avatar.jpg";
import {MdEmail, MdOutlineSpaceDashboard, MdLogout} from "react-icons/md";
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import {AuthContext} from '../../utils/providers/AuthProvider';



const MenuOption = () => {
    const [anchorElUser, setAnchorElUser] = useState(null);
    const {user, logUotUser} = useContext(AuthContext);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLogout = () => {
        logUotUser();
    }


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
                <Link to="" title={user?.displayName}>
                    <MenuItem onClick={handleCloseUserMenu}>
                        <Typography textAlign="left"><span className='flex items-center gap-2 text-sm'><MdEmail /> প্রোফাইল </span></Typography>
                    </MenuItem>
                </Link>

                <Link to="/dashboard">
                    <MenuItem onClick={handleCloseUserMenu}>
                        <Typography textAlign="left"><span className='flex items-center gap-2 text-sm'><MdOutlineSpaceDashboard /> ড্যাশবোর্ড </span></Typography>
                    </MenuItem>
                </Link>

                {
                    user?.email ?
                        <MenuItem onClick={() => {
                            handleCloseUserMenu();
                            handleLogout();
                        }}>
                            <Typography textAlign="left"><span className='flex items-center gap-2 text-sm'><MdLogout /> লগআউট </span></Typography>
                        </MenuItem>
                        :
                        <Link to="/login">
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography textAlign="left"><span className='flex items-center gap-2 text-sm'><MdLogout /> লগইন </span></Typography>
                            </MenuItem>
                        </Link>
                }
            </Menu>
        </Box>
    );
};

export default MenuOption;