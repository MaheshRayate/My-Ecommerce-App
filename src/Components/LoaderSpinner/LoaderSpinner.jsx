import * as React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

const LoaderSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-full">
      <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
        <CircularProgress />
      </Stack>
    </div>
  );
};

export default LoaderSpinner;
