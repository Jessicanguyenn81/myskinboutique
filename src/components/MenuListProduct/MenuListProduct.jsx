import './MenuListProduct.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function MenuListProduct({ menuProduct, handleAddToOrder }) {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div className="MenuListProduct">
      <div className="emoji flex-ctr-ctr">{menuProduct.emoji}</div>
      <div className="name">{menuProduct.name}</div>
      {/* <div className='details'>{menuProduct.details}</div> */}
      <div className="buy">
        <span>${menuProduct.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(menuProduct._id)}>
          ADD
        </button>
        <Button onClick={handleOpen}>Details</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          >
           <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {menuProduct.name}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {menuProduct.details}
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
}