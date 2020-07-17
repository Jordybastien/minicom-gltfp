import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { getLanguage } from '../utils/storage';
import { languages } from '../utils/language';
import HeaderLogo from '../components/headerLogo';
import { blue, white, yellow } from '../utils/colors';
import GestureRecognizer from 'react-native-swipe-gestures';
import Dots from '../components/onBoardingDots';

const { width, height } = Dimensions.get('window');

class OnBoardingScreen extends Component {
  state = {
    count: 0,
    language: 'english',
  };
  componentDidMount() {
    getLanguage().then((data) => data && this.setState({ language: data }));
  }

  handlePrevious = () => {
    const { count } = this.state;
    count !== 0 && this.setState({ count: count - 1 });
  };

  handleNext = () => {
    const { count } = this.state;
    if (count < 2) {
      this.setState({ count: count + 1 });
    } else {
      this.props.navigation.navigate('HomeScreen');
      // update to asyncstorage to not show onboarding screens again
      // push to home screen
    }
  };

  render() {
    const { count, language } = this.state;

    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80,
    };

    return (
      <View>
        <ImageBackground
          source={require('../../assets/bg_lines.png')}
          style={{ width, height }}
        >
          <GestureRecognizer
            onSwipeLeft={this.handlePrevious}
            onSwipeRight={this.handleNext}
            config={config}
            style={{ flex: 1 }}
          >
            <View style={styles.mainContainer}>
              <HeaderLogo />
              <View style={styles.container}>
                <View style={styles.mainTitleContainer}>
                  <Text style={styles.mainTitle}>GLFTP</Text>
                </View>
                <View style={styles.descriptionContainer}>
                  {count === 0 && (
                    <Text style={styles.description}>
                      {languages[language].onBoardingScreen.text1}
                    </Text>
                  )}
                  {count === 1 && (
                    <Text style={styles.description}>
                      {languages[language].onBoardingScreen.text2}
                    </Text>
                  )}
                  {count === 2 && (
                    <Text style={styles.description}>
                      {languages[language].onBoardingScreen.text3}
                    </Text>
                  )}
                </View>
                <View>
                  {count === 0 && (
                    <Image
                      source={require('../../assets/img-1.png')}
                      style={styles.onboardingImage}
                    />
                  )}
                  {count === 1 && (
                    <Image
                      source={require('../../assets/img-2.png')}
                      style={styles.onboardingImage}
                    />
                  )}
                  {count === 2 && (
                    <Image
                      source={require('../../assets/img-3.png')}
                      style={styles.onboardingImage}
                    />
                  )}
                </View>
                <View style={styles.viewHandler}>
                  <View style={styles.prevContainer}>
                    {count !== 0 && (
                      <TouchableOpacity onPress={this.handlePrevious}>
                        <Text style={styles.btnLabels}>
                          {
                            languages[this.state.language].onBoardingScreen
                              .previous
                          }
                        </Text>
                      </TouchableOpacity>
                    )}
                  </View>
                  <Dots
                    count={count}
                    handleClickZ={() => this.setState({ count: 0 })}
                    handleClickO={() => this.setState({ count: 1 })}
                    handleClickT={() => this.setState({ count: 2 })}
                  />
                  <View style={styles.nextBtnContainer}>
                    {count !== 2 ? (
                      <>
                        <TouchableOpacity onPress={this.handleNext}>
                          <Text style={styles.btnLabels}>
                            {
                              languages[this.state.language].onBoardingScreen
                                .next
                            }
                          </Text>
                        </TouchableOpacity>
                        <View>
                          <TouchableOpacity
                            style={styles.circleBtn}
                            onPress={this.handleNext}
                          >
                            <AntDesign
                              name="caretright"
                              size={20}
                              color={white}
                            />
                          </TouchableOpacity>
                        </View>
                      </>
                    ) : (
                      <View style={{ paddingRight: 40 }}>
                        <TouchableOpacity
                          style={styles.getStartedBtn}
                          onPress={this.handleNext}
                        >
                          <Text style={styles.getStartedLabel}>
                            Get Started
                          </Text>
                        </TouchableOpacity>
                      </View>
                    )}
                  </View>
                </View>
              </View>
            </View>
          </GestureRecognizer>
        </ImageBackground>
      </View>
    );
  }
}

export default OnBoardingScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    width,
    height,
    paddingTop: 10,
    paddingBottom: 10,
  },
  onboardingImage: {
    width: 350,
    height: 350,
  },
  viewHandler: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width,
    paddingLeft: 20,
  },

  nextBtnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  prevContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  circleBtn: {
    backgroundColor: yellow,
    borderRadius: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginLeft: 10,
  },
  circleBtnLabel: {
    fontFamily: 'bold',
    color: white,
    fontSize: 10,
  },

  mainTitle: {
    color: blue,
    fontFamily: 'bold',
    fontSize: 40,
  },
  mainTitleContainer: {
    marginBottom: 18,
  },
  description: {
    color: blue,
    fontFamily: 'regular',
    fontSize: 20,
    textAlign: 'center',
  },
  descriptionContainer: {
    paddingRight: 50,
    paddingLeft: 50,
  },
  btnLabels: {
    fontFamily: 'regular',
    color: blue,
  },
  getStartedBtn: {
    backgroundColor: blue,
    width: 150,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    borderRadius: 30,
  },
  getStartedLabel: {
    color: white,
    fontFamily: 'bold',
    fontSize: 16,
  },
});
