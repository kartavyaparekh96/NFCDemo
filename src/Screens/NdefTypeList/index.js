import * as React from 'react';
import {ScrollView} from 'react-native';
import {List} from 'react-native-paper';
import * as NfcIcons from '../../Components/NfcIcons';

function NdefTypeListScreen(props) {
  const {navigation} = props;

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <List.Section>
        <List.Subheader>Well Known</List.Subheader>
        <List.Item
          title="TEXT"
          description="Write text into NFC tags"
          left={NfcIcons.TxtIcon}
          onPress={() => navigation.navigate('NdefWrite', {ndefType: 'TEXT'})}
        />
        <List.Item
          title="Link"
          description="Write web link or uri into NFC tags"
          left={NfcIcons.UriIcon}
          onPress={() => navigation.navigate('NdefWrite', {ndefType: 'URI'})}
        />

      </List.Section>
    </ScrollView>
  );
}

export default NdefTypeListScreen;
