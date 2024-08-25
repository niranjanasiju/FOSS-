import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Modal, Box } from '@mui/material';
import { yellow } from '@mui/material/colors';

const SpeakerCard = ({ speaker }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="flex flex-col h-full">
      <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', boxShadow: 3, backgroundColor: '#abd0ed'}}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            {speaker.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {speaker.title}
          </Typography>
          <Typography variant="body2" sx={{ flexGrow: 1 }}>
            {speaker.shortBio}
          </Typography>
          <Button
            variant="contained"
            sx={{ marginTop: 4, backgroundColor:'#eda316', color: 'white','&:hover': {backgroundColor: '#e4a14f'}}}
            onClick={handleOpen}
          >
            More Details
          </Button>
        </CardContent>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="speaker-details-title"
        aria-describedby="speaker-details-description"
      >
        <Box sx={{ backgroundColor: '#90CAF9', p: 6, maxWidth: 'lg', mx: 'auto', mt: 20, borderRadius: 2, boxShadow: 3 }}>
          <Typography id="speaker-details-title" variant="h6" component="h2">
            {speaker.name}
          </Typography>
          <Typography id="speaker-details-description" sx={{ mt: 2, color: 'black' }}>
            {speaker.fullBio}
          </Typography>
          <Button
            variant="contained"
            sx={{ mt: 4, backgroundColor: '#eda316', color: 'white' ,'&:hover': {backgroundColor: '#e4a14f'}}}
            onClick={handleClose}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default SpeakerCard;
