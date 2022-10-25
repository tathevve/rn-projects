import React, {memo} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Modal} from 'react-native-paper';
import Ionicon from 'react-native-vector-icons/Ionicons';

interface IModal {
  modalTitle?: string | null;
  hideModal: () => void;
  visible: boolean;
  children: React.ReactNode;
}

const RNModal = ({
  modalTitle = null,
  hideModal,
  visible,
  children,
}: IModal): JSX.Element => {
  return (
    <Modal
      visible={visible}
      onDismiss={hideModal}
      contentContainerStyle={styles.modal}>
      <Ionicon
        name="md-close-outline"
        style={styles.closeIcon}
        size={30}
        onPress={hideModal}
      />
      {modalTitle && <Text style={styles.modalTitle}>{modalTitle}</Text>}
      {children}
    </Modal>
  );
};

export default memo(RNModal);

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 40,
    marginHorizontal: 30,
    borderRadius: 10,
    position: 'relative',
    zIndex: 2,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  closeIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
});
