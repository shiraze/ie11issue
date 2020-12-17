import clsx from "clsx";

const MainPagePosition = ({
  classes: {
    toolbar,
    mainPage,
    drawerOpen,
    searchOpen,
    drawerClose,
    bothOpen,
    splashScreen,
    warningText,
  },
  openSearchDrawer,
  openMainMenu,
  children,
  logo,
  warning,
}) => (
  <>
    <div className={toolbar} />
    <div
      className={clsx(mainPage, {
        [drawerOpen]: openMainMenu && !openSearchDrawer,
        [searchOpen]: openSearchDrawer && !openMainMenu,
        [drawerClose]: !openMainMenu && !openSearchDrawer,
        [bothOpen]: openMainMenu && openSearchDrawer,
        [splashScreen]: logo,
        [warningText]: warning,
      })}
    >
      {children}
    </div>
  </>
);

export default MainPagePosition;
