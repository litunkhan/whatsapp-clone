/* eslint-disable react/prop-types */

import { Box, Typography } from "@mui/material";


const Singleuser = ({users}) => {
    return (
        <Box>
        <Box>
            <img src={users.picture} alt="" />
        </Box>
          <Box>
             <Box>
                <Typography>{users.name}</Typography>
             </Box>
          </Box>
        </Box>
    );
};

export default Singleuser;