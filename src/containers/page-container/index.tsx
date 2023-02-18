// Modules
import { Stack } from '@mui/material';
import React, { ReactNode } from 'react';
import PageContainerStyles from './styles';

type Props = {
  children:ReactNode;
}

export default function PageContainer (props:Props) {
  return (
    <>
      <TopBar/>
      <Stack sx={PageContainerStyles.MainContainer}>
        <Stack sx={PageContainerStyles.MainPaddingContainer}>
          {props.children}
        </Stack>
      </Stack>
    </>
  )
}

function TopBar () {
  return (
    <Stack sx={PageContainerStyles.TopBarContainer}>
      <Stack sx={PageContainerStyles.TopBarPaddingContainer}>
      </Stack>
    </Stack>
  )
}
