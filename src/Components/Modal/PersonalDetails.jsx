import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 540,
    height:500,
    bgcolor: 'background.paper',
    
    boxShadow: 24,
    borderRadius: "7px"
   
  };


const PersonalDetails = ({handleClose,open}) => {
  return (
    <div>
 
  <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
    
        <form >
    <Box
    display={"flex"}
    flexDirection={"column"}
    margin={"auto"}
    padding={1}
    gap={2.5}
  noValidate
  autoComplete="off"
>
    <Typography sx={{zIndex:2}} variant='h5' textAlign={"start"}>Personal Details</Typography>
    <hr />
  <div className='px-4 flex justify-between items-center'>
    <p className='w-20 text-lg font-normal'>Name</p>
  <TextField
  sx={{width:"340px"}}
        hiddenLabel
        placeholder='Enter your name'
        size="small"
      />
  </div>
  
  <div className='px-4 flex justify-between items-center'>
    <p className='w-20 text-lg font-normal'>Contact</p>
  <TextField
  sx={{width:"340px"}}
        hiddenLabel
       placeholder='Enter phone number'
        size="small"
      />
  </div>

  <div className='px-4 flex justify-between items-center'>
    <p className='w-20 text-lg font-normal'>Email-ID</p>
  <TextField
  sx={{width:"340px"}}
        hiddenLabel
        placeholder='Enter email-id'
        size="small"
      />
  </div>
  <textarea className='px-4 mx-auto border w-11/12 h-36 resize-none' name="" placeholder='What do want to know?'></textarea>
 <p className='text-center pt-8 text-sm font-normal'>Skitch Techology private limited</p>
  <Typography textAlign={"center"} maxHeight={10}></Typography>
  
</Box>
</form>
    </Box>
  </Modal>
</div>
  )
}

export default PersonalDetails