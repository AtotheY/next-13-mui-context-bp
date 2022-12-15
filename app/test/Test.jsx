'use client';

import { Box, Typography } from '@mui/material';
import { useLocalContext } from 'helpers/context';
import { useEffect } from 'react';

export default function HomePage({ data }) {
  const { setContext } = useLocalContext();

  useEffect(() => {
    setContext(state => ({
      ...state,
      data,
    }));
  }, [data]);

  const { title } = data;
  return (
    <Box>
      <Typography>{title}</Typography>
    </Box>
  );
}
