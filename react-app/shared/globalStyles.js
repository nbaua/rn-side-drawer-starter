import {StyleSheet} from 'react-native';
import colors from './../shared/globalColors';
import constants from './../shared/globalConstants';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.APP_ALTERNATE_BG_COLOR,
  },
  containerDark: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.APP_PRIMARY_BG_COLOR,
  },
  centeredContent: {
    flex: 1,
    marginTop: 0,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'normal',
    fontSize: constants.MEDIUM_FONT_SIZE,
    fontFamily: constants.DEFAULT_REGULAR_FONT,
  },
  backlit: {
    backgroundColor: colors.APP_PRIMARY_DARK_BG_COLOR,
  },
  paddedElement: {
    padding: constants.DEFAULT_PADDING,
  },
  activityIndicator: {
    alignItems: 'center',
    height: constants.MEDIUM_ELEM_DIMS,
    color: colors.APP_PRIMARY_LIGHT_BG_COLOR,
  },
  appLogoLarge: {
    width: constants.LARGE_ELEM_DIMS * 1.5,
    height: constants.LARGE_ELEM_DIMS * 1.5,
    resizeMode: 'contain',
  },
  appLogoSmall: {
    width: constants.MEDIUM_ELEM_DIMS * 1.5,
    height: constants.MEDIUM_ELEM_DIMS * 1.5,
    resizeMode: 'contain',
  },
  appMenuIcon: {
    width: constants.TINY_ELEM_DIMS * 1.5,
    height: constants.TINY_ELEM_DIMS * 1.5,
    marginLeft: constants.DEFAULT_MARGIN / 2,
    tintColor: colors.APP_TINT_COLOR,
  },
  headerText: {
    fontSize: constants.LARGE_FONT_SIZE,
    fontFamily: constants.DEFAULT_BOLD_FONT,
    color: colors.APP_PRIMARY_LIGHT_BG_COLOR,
  },
  circleViewLarge: {
    width: constants.MEDIUM_ELEM_DIMS,
    height: constants.MEDIUM_ELEM_DIMS,
    borderRadius: constants.MEDIUM_ELEM_DIMS / 2,
    color: colors.APP_PRIMARY_TEXT_COLOR,
    backgroundColor: colors.APP_TINT_COLOR,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default globalStyles;
