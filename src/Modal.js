import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

export default function Modal({ open, onClose }) {
  const useSolution = false;
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      disableAutoFocus
      disableEnforceFocus
      disableRestoreFocus={useSolution}
    >
      <DialogContent dividers>
        <TextField
          label="I should be in focus"
          variant="outlined"
          fullWidth
          autoFocus
        />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={onClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
