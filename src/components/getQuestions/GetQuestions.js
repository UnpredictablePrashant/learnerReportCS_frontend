import React from 'react'
import { Box } from '@mui/material';
import { styled } from "@mui/material/styles";

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
const GetQuestions = () => {
  return (
    <div>

<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <div className=''></div>
      </Box>
    </div>
    
  )
}

export default GetQuestions