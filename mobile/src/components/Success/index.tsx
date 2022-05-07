import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import successImage from '../../assets/success.png'
import { Copyright } from '../Copyright';

import { styles } from './styles';

interface Props {
  onSendAnotherFeedback: () => void
}

export function Success({ onSendAnotherFeedback }: Props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={successImage} />

      <Text style={styles.text}>
        Agradecemos o seu feedback
      </Text>

      <TouchableOpacity style={styles.button} onPress={onSendAnotherFeedback}>
        <Text style={styles.buttonText}>
          Quero enviar outro
        </Text>
      </TouchableOpacity>

      <Copyright />
    </View>
  );
}
