import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { getLanguage } from '../utils/storage';
import { languages } from '../utils/language';
import { blue, gray } from '../utils/colors';

const { width, height } = Dimensions.get('window');

const ComplaintDetails = (props) => {
  const [language, setLanguage] = useState('english');
  const [country, setCountry] = useState('');

  useEffect(() => {
    getLanguage().then((data) => data && setLanguage(data));

    const { countries } = props.route.params;
    const selCountry = countries.filter(
      (country) => country.country_code === data.country_id
    );
    setCountry(selCountry[0].country_name);
  });

  const { data } = props.route.params;
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.mainContainer}>
        <ImageBackground
          source={require('../../assets/bg_lines.png')}
          style={{ width, paddingBottom: 50 }}
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
                    {languages[language].complaintDetailsScreen.idNumber}
                  </Text>
                </View>
                <View style={styles.detailDescription}>
                  <Text style={styles.detailDescriptionLabel}>
                    {data.id_number}
                  </Text>
                </View>
              </View>
              <View style={styles.detailContainer}>
                <View style={styles.detailTitle}>
                  <Text style={styles.detailTitleLabel}>
                    {languages[language].complaintDetailsScreen.buSector}
                  </Text>
                </View>
                <View style={styles.detailDescription}>
                  <Text style={styles.detailDescriptionLabel}>
                    {data.business_sector}
                  </Text>
                </View>
              </View>
              <View style={styles.detailContainer}>
                <View style={styles.detailTitle}>
                  <Text style={styles.detailTitleLabel}>
                    {languages[language].complaintDetailsScreen.comNames}
                  </Text>
                </View>
                <View style={styles.detailDescription}>
                  <Text style={styles.detailDescriptionLabel}>
                    {data.commodities_names}
                  </Text>
                </View>
              </View>
              <View style={styles.detailContainer}>
                <View style={styles.detailTitle}>
                  <Text style={styles.detailTitleLabel}>
                    {languages[language].complaintDetailsScreen.description}
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
                    {languages[language].complaintDetailsScreen.borderLocation}
                  </Text>
                </View>
                <View style={styles.detailDescription}>
                  <Text style={styles.detailDescriptionLabel}>
                    {data.border_location}
                  </Text>
                </View>
              </View>
              <View style={styles.detailContainer}>
                <View style={styles.detailTitle}>
                  <Text style={styles.detailTitleLabel}>
                    {languages[language].complaintDetailsScreen.complainant}
                  </Text>
                </View>
                <View style={styles.detailDescription}>
                  <Text style={styles.detailDescriptionLabel}>
                    {country}
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
              {data.comment && (
                <View style={styles.detailContainer}>
                  <View style={styles.detailTitle}>
                    <Text style={styles.detailTitleLabel}>
                      {languages[language].complaintDetailsScreen.comment}
                    </Text>
                  </View>
                  <View style={styles.detailDescription}>
                    <Text style={styles.detailDescriptionLabel}>
                      {data.comment}
                    </Text>
                  </View>
                </View>
              )}
            </View>
          )}
        </ImageBackground>
      </View>
    </ScrollView>
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
    paddingTop: 20,
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
  scrollView: {
    flex: 1,
    height,
  },
});
