import {
  Button,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';

interface GoalInputProps {
  onAddGoal: (text: string) => void;
  showVisibleModal: boolean;
  hideVisibleModal: () => void;
}

const GoalInput: React.FC<GoalInputProps> = ({
  onAddGoal,
  showVisibleModal,
  hideVisibleModal,
}) => {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(text: string) {
    setEnteredGoalText(text);
    console.log('😊: ', text);
  }

  function addInputHandler() {
    onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal visible={showVisibleModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/images/goal.png')}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          placeholderTextColor={'white'}
          value={enteredGoalText}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={addInputHandler}
              color={'#0c0aac'}
            />
          </View>

          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={hideVisibleModal}
              color={'#d70909'}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#000000',
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '86%',
    marginRight: 8,
    padding: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
