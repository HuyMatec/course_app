import React, {useState} from 'react';
import {Button, FlatList, StatusBar, StyleSheet, View} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

const App = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState<any[]>([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addInputHandler(enteredGoalText: string) {
    setCourseGoals(currentCourseGoal => [
      ...currentCourseGoal,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
  }

  function deleteGoalHandler(id: string) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter(goal => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color={'#98e034cc'}
          onPress={startAddGoalHandler}
        />
        {modalIsVisible && (
          <GoalInput
            showVisibleModal={modalIsVisible}
            hideVisibleModal={endAddGoalHandler}
            onAddGoal={addInputHandler}
          />
        )}
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={itemData => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#000000',
  },

  goalsContainer: {
    flex: 3,
    paddingTop: 16,
  },
});
