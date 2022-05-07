import { ArrowLeft } from 'phosphor-react-native';
import React from 'react';
import { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,

} from 'react-native';
import { captureScreen } from 'react-native-view-shot';
import { api } from '../../services/api';
import { theme } from '../../theme';
import { convertImageToBase64 } from '../../utils/encoding';
import { FeedbackType, feedbackTypes } from '../../utils/feedbackTypes';
import { Button } from '../Button';
import { ScreenshotButton } from '../ScreenshotButton';

import { styles } from './styles';

interface Props {
  feedbackType: FeedbackType
  onFeedbackCancelled: () => void
  onFeedbackSent: () => void
}

export function Form({ feedbackType, onFeedbackCancelled, onFeedbackSent }: Props) {
  const [isSendingFeedback, setIsSendingFeedback] = useState(false)
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [comment, setComment] = useState('')

  const feedbackInfo = feedbackTypes[feedbackType]

  function handleTakeScreenshot() {
    captureScreen({
      format: 'jpg',
      quality: 0.8
    })
    .then(uri => setScreenshot(uri))
    .catch(error => console.log(error))
  }

  function handleRemoveScreenshot() {
    setScreenshot(null)
  }

  async function handleSendFeedback() {
    if (isSendingFeedback) {
      return
    }

    setIsSendingFeedback(true)
    let screenshotBase64

    if (screenshot) {
      screenshotBase64 = await convertImageToBase64(screenshot)
    }

    try {
      await api.post('/feedbacks', {
        comment,
        screenshot: screenshotBase64,
        type: feedbackType,
      })

      setIsSendingFeedback(false)
      onFeedbackSent()
    } catch (error) {
      console.log(error)
      setIsSendingFeedback(false)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onFeedbackCancelled}>
          <ArrowLeft
            size={24}
            weight='bold'
            color={theme.colors.text_primary}
          />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Image source={feedbackInfo.image} style={styles.image}/>

          <Text style={styles.titleText}>
            {feedbackInfo.title}
          </Text>
        </View>
      </View>

      <TextInput
        multiline
        autoCorrect={false}
        style={styles.input}
        placeholder='Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo...'
        placeholderTextColor={theme.colors.text_secondary}
        onChangeText={setComment}
      />

      <View style={styles.footer}>
        <ScreenshotButton
          screenshot={screenshot}
          onTakeShot={handleTakeScreenshot}
          onRemoveShot={handleRemoveScreenshot}
        />

        <Button isLoading={isSendingFeedback} onPress={handleSendFeedback} />
      </View>
    </View>
  );
}
