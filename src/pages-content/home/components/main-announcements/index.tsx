// Modules
import React from 'react';
import { Stack, Typography } from '@mui/material';

// Colors
import { greyA } from '@/utils/colors';

// Style
import MainAnnouncementsStyle from './style';

export default function MainAnnouncements () {
  return (
    <Stack sx={MainAnnouncementsStyle.MainContainer}>
      <Stack sx={MainAnnouncementsStyle.MainPaddingContainer}>
        <Typography variant='subtitle2' textTransform='uppercase' color={greyA}>Anuncios</Typography>
      </Stack>
    </Stack>
  )
}
