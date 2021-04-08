import * as React from 'react';
import {Image} from 'react-native';

function NfcIcon() {
  return (
    <Image
      source={require('../../images/nfc-512.png')}
      style={{width: 44, height: 44}}
      resizeMode="contain"
    />
  );
}

function TxtIcon() {
  return (
    <Image
      source={require('../../images/RD_text_A512.png')}
      style={{width: 44, height: 44}}
      resizeMode="contain"
    />
  );
}

function UriIcon() {
  return (
    <Image
      source={require('../../images/RD_uri_A512.png')}
      style={{width: 44, height: 44}}
      resizeMode="contain"
    />
  );
}


export {
  NfcIcon,
  TxtIcon,
  UriIcon,

};
