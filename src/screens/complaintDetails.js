import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { getLanguage } from '../utils/storage';
import { languages } from '../utils/language';
import { blue, gray } from '../utils/colors';

const { width, height } = Dimensions.get('window');

const ComplaintDetails = (props) => {
  const [language, setLanguage] = useState('english');

  useEffect(() => {
    getLanguage().then((data) => data && setLanguage(data));
  });
  const { data } = props.route.params;
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={require('../../assets/bg_lines.png')}
        style={{ width, height }}
      >
        {data && (
          <View style={styles.container}>
            <View style={styles.detailContainer}>
              <View style={styles.detailTitleContainer}>
                <Text style={styles.detailTitleLabel}>
                  {languages[language].complaintDetailsScreen.complaintNumber}
                </Text>
              </View>
              <View style={styles.detailDescription}>
                <Text style={styles.detailDescriptionLabel}>
                  {data.complaint_code}
                </Text>
              </View>
            </View>
            <View style={styles.detailContainer}>
              <View style={styles.detailTitle}>
                <Text style={styles.detailTitleLabel}>
                  {languages[language].complaintDetailsScreen.phoneNumber}
                </Text>
              </View>
              <View style={styles.detailDescription}>
                <Text style={styles.detailDescriptionLabel}>
                  {data.phone_number}
                </Text>
              </View>
            </View>
            <View style={styles.detailContainer}>
              <View style={styles.detailTitle}>
                <Text style={styles.detailTitleLabel}>
                  {languages[language].complaintDetailsScreen.complaintNumber}
                </Text>
              </View>
              <View style={styles.detailDescription}>
                <Text style={styles.detailDescriptionLabel}>
                  {data.message}
                </Text>
              </View>
            </View>
            <View style={styles.detailContainer}>
              <View style={styles.detailTitle}>
                <Text style={styles.detailTitleLabel}>
                  {languages[language].complaintDetailsScreen.status}
                </Text>
              </View>
              <View style={styles.detailDescription}>
                <Text style={styles.detailDescriptionLabel}>
                  {data.complain_status}
                </Text>
              </View>
            </View>
          </View>
        )}
      </ImageBackground>
    </View>
  );
};

export default ComplaintDetails;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    paddingTop: 80,
    paddingLeft: 30,
  },
  detailContainer: {
    marginBottom: 40,
  },
  detailTitleContainer: {
    marginBottom: 10,
  },
  detailTitleLabel: {
    color: blue,
    fontFamily: 'bold',
    fontSize: 20,
  },
  detailDescriptionLabel: {
    color: gray,
    fontSize: 16,
  },
});
