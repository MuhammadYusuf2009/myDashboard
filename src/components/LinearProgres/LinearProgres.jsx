import { LinearProgress, Box, Typography } from "@mui/material";

function LinearProgres({ progress = 0 }) {
  return (
    <Box sx={{ width: "100%", my: 2 }}>
      <LinearProgress variant="determinate" value={progress} />
      <Typography variant="caption" display="block" textAlign="right">
        {progress}%
      </Typography>
    </Box>
  );
}

export default LinearProgres;
