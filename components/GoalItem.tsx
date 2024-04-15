import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

interface GoalItemProps {
  text: string;
  onDeleteItem: (id: string) => void;
  id: any;
}

const GoalItem: React.FC<GoalItemProps> = ({text, onDeleteItem, id}) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{color: '#7c1823'}}
        onPress={onDeleteItem.bind(this, id)}>
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: 'tomato',
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
});
