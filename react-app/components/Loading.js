import React from 'react';
import {ActivityIndicator, Modal, StyleSheet, View} from 'react-native';
import colors from './../shared/globalColors';
import constants from './../shared/globalConstants';

const Loading = props => {
  const {loading, color} = props;

  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}
      onRequestClose={() => {
        console.log('closed Loading dialog.');
      }}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator
            animating={true}
            color={color}
            size="large"
            style={styles.activityIndicator}
          />
        </View>
      </View>
    </Modal>
  );
};

export default Loading;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: colors.APP_TRANSPARENT_DARK_BG_COLOR,
  },
  activityIndicatorWrapper: {
    width: '90%',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', //APP_TINT_COLOR
    justifyContent: 'space-around',
    height: constants.LARGE_ELEM_DIMS,
    borderRadius: constants.DEFAULT_BORDER_RADIUS,
  },
  activityIndicator: {
    alignItems: 'center',
    height: constants.MEDIUM_ELEM_DIMS,
  },
});
