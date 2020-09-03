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
import { languages, startUpLanguage } from '../utils/language';
import { blue, gray } from '../utils/colors';
import { connect } from 'react-redux';

const { width, height } = Dimensions.get('window');

const ComplaintDetails = (props) => {
  const [language, setLanguage] = useState(startUpLanguage);
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
  const { keywords } = props;
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
                    {keywords[language].complain_code_form
                      ? keywords[language].complain_code_form
                      : keywords[startUpLanguage].complain_code_form}
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
                    {keywords[language].phone_form_input_title
                      ? keywords[language].phone_form_input_title
                      : keywords[startUpLanguage].phone_form_input_title}
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
                    {keywords[language].id_number_input
                      ? keywords[language].id_number_input
                      : keywords[startUpLanguage].id_number_input}
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
                    {keywords[language].buSector_label_complaint_details
                      ? keywords[language].buSector_label_complaint_details
                      : keywords[startUpLanguage]
                          .buSector_label_complaint_details}
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
                    {keywords[language].Commodities_name
                      ? keywords[language].Commodities_name
                      : keywords[startUpLanguage].Commodities_name}
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
                    {keywords[language].message_label_complaint_details
                      ? keywords[language].message_label_complaint_details
                      : keywords[startUpLanguage]
                          .message_label_complaint_details}
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
                    {keywords[language].border_location_label
                      ? keywords[language].border_location_label
                      : keywords[startUpLanguage].border_location_label}
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
                    {keywords[language].choose_country
                      ? keywords[language].choose_country
                      : keywords[startUpLanguage].choose_country}
                  </Text>
                </View>
                <View style={styles.detailDescription}>
                  <Text style={styles.detailDescriptionLabel}>{country}</Text>
                </View>
              </View>
              <View style={styles.detailContainer}>
                <View style={styles.detailTitle}>
                  <Text style={styles.detailTitleLabel}>
                    {keywords[language].status_label
                      ? keywords[language].status_label
                      : keywords[startUpLanguage].status_label}
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
                      {keywords[language].comment_label_complaint_details
                        ? keywords[language].comment_label_complaint_details
                        : keywords[startUpLanguage]
                            .comment_label_complaint_details}
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

const mapStateToProps = ({ keywords }) => {
  return {
    keywords,
  };
};

export default connect(mapStateToProps)(ComplaintDetails);

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
