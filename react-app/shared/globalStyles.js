import {PixelRatio, StyleSheet} from 'react-native';
import colors from './globalColors';
import constants from './globalConstants';
const size = constants.MEDIUM_ELEM_DIMS;

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
  autoSection: {
    flex: 1,
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
    width: PixelRatio.getPixelSizeForLayoutSize(size * 2),
    height: PixelRatio.getPixelSizeForLayoutSize(size * 2),
    resizeMode: 'contain',
  },
  appLogoSmall: {
    width: PixelRatio.getPixelSizeForLayoutSize(size),
    height: PixelRatio.getPixelSizeForLayoutSize(size),
    resizeMode: 'contain',
    alignSelf: 'center',
    padding: constants.DEFAULT_PADDING,
    margin: constants.DEFAULT_MARGIN * 2,
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
  buttonStyle: {
    backgroundColor: colors.APP_PRIMARY_LIGHT_BG_COLOR,
    borderColor: colors.APP_PRIMARY_LIGHT_BG_COLOR,
    borderWidth: 0,
    alignItems: 'center',
    borderRadius: constants.SMALL_BORDER_RADIUS,
    paddingTop: constants.DEFAULT_PADDING / 2,
    marginVertical: constants.DEFAULT_MARGIN,
    height: constants.SMALL_ELEM_DIMS,
  },
  buttonTextStyle: {
    fontSize: constants.NORMAL_FONT_SIZE,
    fontFamily: constants.DEFAULT_REGULAR_FONT,
    color: colors.APP_PRIMARY_TEXT_COLOR,
  },
  inputStyle: {
    borderWidth: 1,
    color: colors.APP_PRIMARY_TEXT_COLOR,
    backgroundColor: colors.APP_PRIMARY_LIGHT_BG_COLOR,
    borderColor: colors.APP_PRIMARY_DARK_BG_COLOR,
    paddingHorizontal: constants.DEFAULT_PADDING * 2,
    paddingTop: constants.DEFAULT_PADDING,
    paddingBottom: 0,
    borderRadius: constants.SMALL_BORDER_RADIUS,
    marginBottom: constants.DEFAULT_MARGIN / 2,
    // fontSize: constants.NORMAL_FONT_SIZE,
  },
  linkTextStyle: {
    textAlign: 'center',
    alignSelf: 'center',
    color: colors.APP_ALTERNATE_TEXT_COLOR,
    fontSize: constants.NORMAL_FONT_SIZE,
    fontFamily: constants.DEFAULT_REGULAR_FONT,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: constants.NORMAL_FONT_SIZE,
  },
});

export default globalStyles;
