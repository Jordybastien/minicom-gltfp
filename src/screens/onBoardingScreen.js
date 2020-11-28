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
import HeaderLogo from '../components/headerLogo/custom';
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
    if (count < 6) {
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
            style={{ flex: 1, backgroundColor: blue }}
          >
            <View style={styles.mainContainer}>
              <HeaderLogo />
              <View style={styles.container}>
                <View style={styles.mainTitleContainer}>
                  <Text style={styles.mainTitle}>CBTC</Text>
                </View>
                <View style={styles.descriptionContainer}>
                  {count === 0 && (
                    <Animatable.View
                      style={{ marginBottom: 30, marginTop: 20 }}
                      animation="fadeInLeft"
                    >
                      <Text style={styles.onBoardingTitle}>
                        {keywords[language].rra_slider_title
                          ? keywords[language].rra_slider_title
                          : keywords[startUpLanguage].rra_slider_title}
                      </Text>
                    </Animatable.View>
                  )}
                  {count === 1 && (
                    <Animatable.View
                      style={{ marginBottom: 30, marginTop: 20 }}
                      animation="fadeInLeft"
                    >
                      <Text style={styles.onBoardingTitle}>
                        {keywords[language].rnp_title
                          ? keywords[language].rnp_title
                          : keywords[startUpLanguage].rnp_title}
                      </Text>
                    </Animatable.View>
                  )}
                  {count === 2 && (
                    <Animatable.View
                      style={{ marginBottom: 30, marginTop: 20 }}
                      animation="fadeInLeft"
                    >
                      <Text style={styles.onBoardingTitle}>
                        {keywords[language].rsb_title
                          ? keywords[language].rsb_title
                          : keywords[startUpLanguage].rsb_title}
                      </Text>
                    </Animatable.View>
                  )}
                  {count === 3 && (
                    <Animatable.View
                      style={{ marginBottom: 30, marginTop: 20 }}
                      animation="fadeInLeft"
                    >
                      <Text style={styles.onBoardingTitle}>
                        {keywords[language].fda_title
                          ? keywords[language].fda_title
                          : keywords[startUpLanguage].fda_title}
                      </Text>
                    </Animatable.View>
                  )}
                  {count === 4 && (
                    <Animatable.View
                      style={{ marginBottom: 30, marginTop: 20 }}
                      animation="fadeInLeft"
                    >
                      <Text style={styles.onBoardingTitle}>
                        {keywords[language].rica_title
                          ? keywords[language].rica_title
                          : keywords[startUpLanguage].rica_title}
                      </Text>
                    </Animatable.View>
                  )}
                  {count === 5 && (
                    <Animatable.View
                      style={{ marginBottom: 30, marginTop: 20 }}
                      animation="fadeInLeft"
                    >
                      <Text style={styles.onBoardingTitle}>
                        {keywords[language].dgi_title
                          ? keywords[language].dgi_title
                          : keywords[startUpLanguage].dgi_title}
                      </Text>
                    </Animatable.View>
                  )}
                  {count === 6 && (
                    <Animatable.View
                      style={{ marginBottom: 30, marginTop: 20 }}
                      animation="fadeInLeft"
                    >
                      <Text style={styles.onBoardingTitle}>
                        {keywords[language].minicom_title
                          ? keywords[language].minicom_title
                          : keywords[startUpLanguage].minicom_title}
                      </Text>
                    </Animatable.View>
                  )}
                </View>
                <View>
                  {count === 0 && (
                    <Animatable.View
                      animation="fadeInUp"
                      style={styles.singleParagraph}
                    >
                      <Text style={styles.onBoardingBody}>
                        {keywords[language].rra_paragraph
                          ? keywords[language].rra_paragraph
                          : keywords[startUpLanguage].rra_paragraph}
                      </Text>
                    </Animatable.View>
                  )}
                  {count === 1 && (
                    <Animatable.View
                      animation="fadeInUp"
                      style={styles.singleParagraph}
                    >
                      <Text style={styles.onBoardingBody}>
                        {keywords[language].rnp_paragraph
                          ? keywords[language].rnp_paragraph
                          : keywords[startUpLanguage].rnp_paragraph}
                      </Text>
                    </Animatable.View>
                  )}
                  {count === 2 && (
                    <Animatable.View
                      animation="fadeInUp"
                      style={styles.singleParagraph}
                    >
                      <Text style={styles.onBoardingBody}>
                        {keywords[language].rsb_paragraph
                          ? keywords[language].rsb_paragraph
                          : keywords[startUpLanguage].rsb_paragraph}
                      </Text>
                    </Animatable.View>
                  )}
                  {count === 3 && (
                    <Animatable.View
                      animation="fadeInUp"
                      style={styles.singleParagraph}
                    >
                      <Text style={styles.onBoardingBody}>
                        {keywords[language].fda_paragraph
                          ? keywords[language].fda_paragraph
                          : keywords[startUpLanguage].fda_paragraph}
                      </Text>
                    </Animatable.View>
                  )}
                  {count === 4 && (
                    <Animatable.View
                      animation="fadeInUp"
                      style={styles.singleParagraph}
                    >
                      <Text style={styles.onBoardingBody}>
                        {keywords[language].rica_paragraph
                          ? keywords[language].rica_paragraph
                          : keywords[startUpLanguage].rica_paragraph}
                      </Text>
                    </Animatable.View>
                  )}
                  {count === 5 && (
                    <Animatable.View
                      animation="fadeInUp"
                      style={styles.singleParagraph}
                    >
                      <Text style={styles.onBoardingBody}>
                        {keywords[language].dgi_paragraph
                          ? keywords[language].dgi_paragraph
                          : keywords[startUpLanguage].dgi_paragraph}
                      </Text>
                    </Animatable.View>
                  )}
                  {count === 6 && (
                    <Animatable.View
                      animation="fadeInUp"
                      style={styles.singleParagraph}
                    >
                      <Text style={styles.onBoardingBody}>
                        {keywords[language].minicom_paragraph
                          ? keywords[language].minicom_paragraph
                          : keywords[startUpLanguage].minicom_paragraph}
                      </Text>
                    </Animatable.View>
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
                    handleClickTh={() => this.setState({ count: 3 })}
                    handleClickF={() => this.setState({ count: 4 })}
                    handleClickFi={() => this.setState({ count: 5 })}
                    handleClickS={() => this.setState({ count: 6 })}
                  />
                  <View style={styles.nextBtnContainer}>
                    {count !== 6 ? (
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
                              color={blue}
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
    backgroundColor: white,
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
    color: white,
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
    paddingRight: 30,
    paddingLeft: 30,
    justifyContent: 'center',
    marginTop: 30,
  },
  btnLabels: {
    fontFamily: 'regular',
    color: white,
  },
  getStartedBtn: {
    backgroundColor: white,
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
    color: blue,
    fontFamily: 'bold',
    fontSize: 16,
  },
  onBoardingTitle: {
    color: white,
    fontFamily: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  onBoardingBody: {
    color: white,
    fontFamily: 'regular',
    textAlign: 'center',
    fontSize: 15,
  },
  singleParagraph: {
    height: 230,
    // justifyContent: 'center',
  },
});
