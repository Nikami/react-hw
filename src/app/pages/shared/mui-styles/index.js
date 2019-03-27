const containerMUI = theme => ({
  container: {
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    width: 'auto',
    [theme.breakpoints.up(750 + theme.spacing.unit * 2 * 2)]: {
      marginLeft: 'auto',
      marginRight: 'auto',
      width: 750,
    },
  },
});

export { containerMUI };
