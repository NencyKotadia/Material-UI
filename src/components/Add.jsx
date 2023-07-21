import React, { useState } from "react";
import { Add as AddIcon, EmojiEmotions, PersonAdd, VideoCameraBack,Image, DateRange} from "@mui/icons-material"
import{ Fab, Tooltip, styled, Modal, Typography, Avatar,TextField,Button,ButtonGroup} from "@mui/material";
import { Box, Stack } from "@mui/system";


const StyledModal = styled(Modal) ({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
});
const UserBox = styled(Box) ({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    marginBottom:"20px"
});

const Add = () => {

    const [open, setOpen] = useState(false)
    return (
        <>
            <Tooltip onClick={e=>setOpen(true)} title="Delete" sx={{position:"fixed", bottom:20, left:{xs:"calc(50% - 25px)", md:30},}}>
            <Fab color="primary" aria-label="add">
  <AddIcon />   
</Fab>
</Tooltip>
<StyledModal open={open}
onClose={e=>setOpen(false)}
// aria-lablelledby="modal-modal-title"
aria-describedby="modal-modal-description"
>
    <Box width={400} height={330} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
    <Typography variant="h6" color="gray" textAlign="center">Create post</Typography>
    <UserBox>
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_9xET98GYXWtOkseNdVaZEnv7Uf_VT65WqA&usqp=CAU" sx={{width:30, height:30}}/>
        <Typography fontFamily={500} variant="span">
            nency kotadiya
        </Typography>
    </UserBox>
    <TextField
          sx={{width:"100%"}}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="What's on your mind?"
          variant="standard"
        />
        <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary"/>
            <Image color="secondary"/>
            <VideoCameraBack color="success "/>
            <PersonAdd color="error" />
        </Stack>
        <ButtonGroup  fullWidth 
        variant="contained"
         aria-label="outlined primary button group">
  <Button>Post</Button>
  <Button   sx={{width:"100pxs"}}>
  
    <DateRange/>
  </Button>
 
</ButtonGroup>
    </Box>

</StyledModal>
        </>
    )
}

export default Add