import React from "react";
import { AppBar, Avatar, InputBase, Toolbar, Typography } from '@mui/material'
import styled from "@emotion/styled";
import { Pets } from "@mui/icons-material";
import Badge from '@mui/material/Badge';
import Mail from '@mui/icons-material/Mail';
import { Notifications } from '@mui/icons-material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";


const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
});

const Search = styled("div") (({ theme }) => ({
    backgroundColor:"white",
    Padding:"0 10px",
  width: "40%",
 borderRadius:"3px",
}));

const Icons = styled("Box") (({ theme })=>({
     display: "flex",
      alignItems: "center",
      gap: "20px",
    

}));
// const UserBox = styled("Box") (({ theme })=>({ display: "flex", alignItems: "center",
// gap: "10px",

// }));

const Navbar = () => {
 const [open, setOpen] = useState(false)

    return (
        <AppBar position="sticky">
           <StyledToolbar>
            <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}>
                YOUR LOGO
            </Typography>
            <Pets sx={{display:{xs:"block", sm:"none"}}}/>
            <Search><InputBase placeholder="search..." sx={{ padding: 1 ,  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)' ,width: '590px'}} /></Search>
            <Icons>
            <Badge badgeContent={4} color="error">
  <Mail/>
</Badge>

<Badge badgeContent={2} color="error">
 <Notifications/>
</Badge>

<Avatar sx={{width:30, height:30}} src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
onClick={e=>setOpen(true)}
/>
            </Icons>
           
           </StyledToolbar>

           <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
        onClose={(e) => setOpen(false)}
        // onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
        </AppBar>
    )
}

export default Navbar;