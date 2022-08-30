import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";

const [open, setOpen] = useState(false);

const handleClickOpen = () => {
  setOpen(true);
};
const handleClose = () => {
  setOpen(false);
};

<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
  <DialogTitle id="form-dialog-title"> оформить заказ</DialogTitle>
  <DialogContent>
    <DialogContentText> Log in to see Videos </DialogContentText>
    <TextField
      autoFocus
      margin="dense"
      id="name"
      label="email.adress"
      type="email"
      fullWidth
    />
    <TextField
      autoFocus
      margin="dense"
      id="name"
      label="email.adress"
      type="email"
      fullWidth
    />
    <TextField
      autoFocus
      margin="dense"
      id="adress"
      label="adress"
      type="text"
      fullWidth
    />
  </DialogContent>
  <DialogActions>
    <Button onClick={handleClose} color="primary">
      cansel
    </Button>
    <Button onClick={handleClose} color="primary">
      Log in
    </Button>
  </DialogActions>
</Dialog>;
