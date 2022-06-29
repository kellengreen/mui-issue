import { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import useTheme from "@mui/material/styles/useTheme";

import Modal from "./Modal";

export default function App() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const customFocus = {
    ":focus-within": { outline: `.25em dashed ${theme.palette.grey[600]}` },
  };
  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)} />
      <Grid container spacing={2}>
        <Grid item>
          <Button
            variant="contained"
            onClick={() => setOpen(true)}
            focusRipple={false}
            sx={customFocus}
          >
            Open
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            focusRipple={false}
            sx={customFocus}
          >
            Does nothing
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
