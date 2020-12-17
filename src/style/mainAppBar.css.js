export default theme => ({
  appbar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  toolbar: {},
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -theme.spacing(2),
    marginRight: theme.spacing(1),
  },
  title: {
    textTransform: "none",
  },
});
