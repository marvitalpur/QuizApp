import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
const ShuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};
const Quize = ({navigation}) => {
  const [questions, setQuestion] = useState();
  const [ques, setQues] = useState(0);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const getQuiz = async () => {
    const url =
      'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple&encode=url3986';
    const res = await fetch(url);
    const data = await res.json();
    setQuestion(data.results);
    // console.log(data);
    setOptions(generateOptionAndShuffle(data.results[0]));
  };
  useEffect(() => {
    getQuiz();
  }, []);

  const HandleNextPress = () => {
    setQues(ques + 1);
    setOptions(generateOptionAndShuffle(questions[ques + 1]));
  };

  const generateOptionAndShuffle = _questions => {
    const options = [..._questions.incorrect_answers];
    options.push(_questions.correct_answer);
    ShuffleArray(options);

    return options.map(option => decodeURIComponent(option));
  };

  const handleSelectionOption = _option => {
    if (_option === questions[ques].correct_answer) {
      setScore(score + 10);
    }
    if (ques !== 9) {
      setQues(ques + 1);
      setOptions(generateOptionAndShuffle(questions[ques + 1]));
    }
    console.log(_option === questions[ques].correct_answer);
  };
  return (
    <LinearGradient
      start={{x: 0.0, y: 0.25}}
      end={{x: 0.5, y: 1.0}}
      locations={[0, 0.5, 0.6]}
      colors={['#F72585', '#B5179E']}
      style={styles.container}>
      {questions && (
        <View style={styles.parent}>
          <View style={styles.Top}>
            <Text style={styles.questions}>
              Q:{decodeURIComponent(questions[ques].question)}
            </Text>
          </View>
          <View style={styles.Options}>
            <TouchableOpacity
              onPress={() => {
                handleSelectionOption(options[0]);
              }}
              style={styles.optionbtn}>
              <Text style={styles.question}>
                {decodeURIComponent(options[0])}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handleSelectionOption(options[1]);
              }}
              style={styles.optionbtn}>
              <Text style={styles.question}>
                {decodeURIComponent(options[1])}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handleSelectionOption(options[2]);
              }}
              style={styles.optionbtn}>
              <Text style={styles.question}>
                {decodeURIComponent(options[2])}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handleSelectionOption(options[3]);
              }}
              style={styles.optionbtn}>
              <Text style={styles.question}>
                {decodeURIComponent(options[3])}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottom}>
            {/* <TouchableOpacity
              onPress={() => {
                navigation.navigate('Quiz');
              }}
              style={styles.btn}>
              <Text style={styles.bntext}>PREV</Text>
            </TouchableOpacity> */}
            {ques !== 9 && (
              <TouchableOpacity onPress={HandleNextPress} style={styles.btn}>
                <Text style={styles.bntext}>SKIP</Text>
              </TouchableOpacity>
            )}
            {ques == 9 && (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Result', {
                    score: score,
                  })
                }
                style={[styles.btn, {backgroundColor: '#F72585'}]}>
                <Text style={styles.bntext}>Show Result</Text>
              </TouchableOpacity>
            )}

            {/* <TouchableOpacity
              onPress={() => {
                navigation.navigate('Quiz');
              }}
              style={styles.btn}>
              <Text style={styles.bntext}>End</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      )}
    </LinearGradient>
  );
};

export default Quize;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  Top: {
    marginVertical: 16,
  },
  Options: {
    flex: 1,
    marginVertical: 15,
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  btn: {
    // width: '100%',
    backgroundColor: '#560BAD',
    padding: 8,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  bntext: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    paddingHorizontal: 15,
  },

  questions: {
    fontSize: 32,
    color: '#FFF',
  },
  optionbtn: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: '#6411AD',
    paddingHorizontalL: 12,
    borderRadius: 12,
  },
  question: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
    paddingHorizontal: 15,
  },
  parent: {
    height: '100%',
  },
});
