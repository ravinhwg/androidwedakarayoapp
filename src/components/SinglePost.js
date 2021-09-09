/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import useDarkMode from '../utils/hooks/useDarkMode';
import makeDateReadable from '../utils/makeDateReadable';

const {height, width} = Dimensions.get('window');

export default function SinglePost() {
  const isDarkMode = useDarkMode();
  const removeNewLine = text => {
    return text.replace(/\n/g, '').trim();
***REMOVED***;
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? '#000000' : '#fff'},
      ]}>
      <Image
        source={{
          uri: 'https://***REMOVED***.com/content/images/2021/09/Samsung-plans-to-launch-its-576MP-camera-sensor-in-four-years.jpg',
      ***REMOVED***}
        style={styles.image}
      />
      <View style={styles.contentView}>
        <View style={styles.dateReadTimeUnit}>
          <Text style={styles.dateReadTime} numberOfLines={5}>
            {makeDateReadable('2020-09-20T00:00:00.000Z')}
          </Text>
          <Text style={styles.dateReadTime} numberOfLines={5}>
            {` • `}
          </Text>
          <Text style={styles.dateReadTime} numberOfLines={5}>
            1 min read
          </Text>
        </View>
        <Text style={styles.headingText}>
          ඉදිරි වසර 4 ඇතුලතදී Samsung සමාගම විසින් මිනිස් ඇසට සමාන 576MP කැමරා
          සෙන්සර් එකක් එලිදැක්වීමට සූදානම් වේ.
        </Text>

        <Text style={styles.excerptText} numberOfLines={5}>
          {removeNewLine(`දකුණු කොරියානු තාක්ෂණික දැවැන්තයා වෙන Samsung සමාගම විසින් ඔවුන්ගේ
          Camera\nSensors වැඩිදියුණු කිරිම පිළිබඳ මේ වෙන විටත් කටයුතු කරමින්
          ඉන්නවා. ඒ අනුව පසුගිය\nසතියේදි ඔවුන් විසින් ලොව ප්‍රථම 200MP Smart
          Phone Camera Sensor එක ලෙස Samsung\nISOCELL HP1 Sensor එක එළිදැක්වීමට
          කටයුතු කරනු ලැබුවා.\n\nSamsung සමාගම විසින් මේ වන 600MP පමණ වු Camera
          Sensor එකක් පිළිබඳ කටයුතු කරමින්\nසිටින බව ඔවුන් විසින් නිල වශයෙන්
          වාර්තා කර තිබෙනවා. ඒ SEMI යුරෝපා සමුළුවේදි\nSamsung Electronics සමාගමේ
          Automotive Sensor අංශයේ Seni`)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width - 20,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 5,
    alignSelf: 'center',
***REMOVED***,
  image: {
    width: width - 20,
    aspectRatio: 1200 / 630,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
***REMOVED***,
  contentView: {
    padding: 10,
***REMOVED***,
  headingText: {
    width: width - 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
***REMOVED***,
  excerptText: {
    marginTop: 20,
    fontSize: 14,
    color: '#757575',
***REMOVED***,
  dateReadTimeUnit: {
    flexDirection: 'row',
    marginTop: 4,
***REMOVED***,
  dateReadTime: {
    fontSize: 12,
    color: '#757575',
***REMOVED***,
});
