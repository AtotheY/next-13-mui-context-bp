import { link, flexColumnCenter } from 'styles/common';

// if theme is needed, import theme in component with useTheme hook and pass in here
export default () => ({
  ...link(),
  ...flexColumnCenter(),
  container: {
    p: 6,
    mt: 9,
  },
  iconContainer: {
    cursor: 'pointer',
  },
});
