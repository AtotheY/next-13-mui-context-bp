const link = () => ({
  link: {
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'inherit',
  },
});

const flexRowCenter = () => ({
  flexRowCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const flexColumnCenter = () => ({
  flexColumnCenter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export { link, flexRowCenter, flexColumnCenter };
