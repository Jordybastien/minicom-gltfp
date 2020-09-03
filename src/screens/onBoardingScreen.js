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
import { getLanguage, changeOnboardingStatus } from '../utils/storage';
import { languages, startUpLanguage } from '../utils/language';
import HeaderLogo from '../components/headerLogo';
import { blue, white, yellow } from '../utils/colors';
import GestureRecognizer from 'react-native-swipe-gestures';
import Dots from '../components/onBoardingDots';
import * as Animatable from 'react-native-animatable';
import { connect } from 'react-redux';

const { width, height } = Dimensions.get('window');

class OnBoardingScreen extends Component {
  state = {
    count: 0,
    language: startUpLanguage,
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
      changeOnboardingStatus(true);
      this.props.navigation.reset({
        index: 0,
        routes: [{ name: 'HomeScreen' }],
      });
    }
  };

  render() {
    const { count, language } = this.state;

    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80,
    };

    const { keywords } = this.props;
    // console.log('==========>keywords', keywords);

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
                    <Animatable.Text
                      style={styles.description}
                      animation="fadeInLeft"
                    >
                      {keywords[language].mobile_slider_one
                        ? keywords[language].mobile_slider_one
                        : keywords[startUpLanguage].mobile_slider_one}
                    </Animatable.Text>
                  )}
                  {count === 1 && (
                    <Animatable.Text
                      style={styles.description}
                      animation="fadeInLeft"
                    >
                      {keywords[language].mobile_slider_two
                        ? keywords[language].mobile_slider_two
                        : keywords[startUpLanguage].mobile_slider_two}
                    </Animatable.Text>
                  )}
                  {count === 2 && (
                    <Animatable.Text
                      style={styles.description}
                      animation="fadeInLeft"
                    >
                      {keywords[language].mobile_slider_three
                        ? keywords[language].mobile_slider_three
                        : keywords[startUpLanguage].mobile_slider_three}
                    </Animatable.Text>
                  )}
                </View>
                <View>
                  {count === 0 && (
                    <Animatable.Image
                      source={require('../../assets/img-1.png')}
                      style={styles.onboardingImage}
                      animation="fadeInUp"
                    />
                  )}
                  {count === 1 && (
                    <Animatable.Image
                      source={require('../../assets/img-2.png')}
                      style={styles.onboardingImage}
                      animation="fadeInUp"
                    />
                  )}
                  {count === 2 && (
                    <Animatable.Image
                      source={require('../../assets/img-3.png')}
                      style={styles.onboardingImage}
                      animation="fadeInUp"
                    />
                  )}
                </View>
                <View style={styles.viewHandler}>
                  <View style={styles.prevContainer}>
                    {count !== 0 && (
                      <TouchableOpacity onPress={this.handlePrevious}>
                        <Text style={styles.btnLabels}>
                          {keywords[language].onboarding_screen_previous_btn
                            ? keywords[language].onboarding_screen_previous_btn
                            : keywords[startUpLanguage]
                                .onboarding_screen_previous_btn}
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
                            {keywords[language].onboarding_screen_next_btn
                              ? keywords[language].onboarding_screen_next_btn
                              : keywords[startUpLanguage]
                                  .onboarding_screen_next_btn}
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
                      <View>
                        <TouchableOpacity
                          style={styles.getStartedBtn}
                          onPress={this.handleNext}
                        >
                          <Text style={styles.getStartedLabel}>
                            {keywords[language].get_started
                              ? keywords[language].get_started
                              : keywords[startUpLanguage].get_started}
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

const mapStateToProps = ({ keywords }) => {
  return {
    keywords,
  };
};

export default connect(mapStateToProps)(OnBoardingScreen);

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
    width: width - 50,
    height,
    paddingTop: 10,
    paddingBottom: 70,
  },
  onboardingImage: {
    width: 350,
    height: 350,
  },
  viewHandler: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width - 50,
  },

  nextBtnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10,
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
