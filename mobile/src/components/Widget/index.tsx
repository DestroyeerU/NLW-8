import React, { useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import BottomSheet from '@gorhom/bottom-sheet';
import { ChatTeardropDots } from 'phosphor-react-native';

import { theme } from '../../theme';

import { styles } from './styles';
import { Form } from '../Form';
import { Success } from '../Success';
import { useState } from 'react';
import { FeedbackType } from '../../utils/feedbackTypes';
import { Options } from '../Options';

const Widget: React.FC = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [isFeedbackSent, setIsFeedbackSent] = useState(false)

  const bottomSheetRef = useRef<BottomSheet>(null)

  function handleOpenBottomSheet() {
    bottomSheetRef.current?.expand()
  }

  function handleRestartFeedback() {
    setFeedbackType(null)
    setIsFeedbackSent(false)
  }

  function handleFeedbackSent() {
    setIsFeedbackSent(true)
  }

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={handleOpenBottomSheet}>
        <ChatTeardropDots
          size={24}
          weight='bold'
          color={theme.colors.text_on_brand_color}
        />
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1, 280]}
        backgroundStyle={styles.bottomSheet}
        handleIndicatorStyle={styles.indicator}
      >

        {isFeedbackSent ? (
          <Success onSendAnotherFeedback={handleRestartFeedback}/>
        ): (
          <>
            {feedbackType ? (
              <Form
                feedbackType={feedbackType}
                onFeedbackCancelled={handleRestartFeedback}
                onFeedbackSent={handleFeedbackSent}
              />
            ) : (
              <Options onFeedbackTypeChanged={setFeedbackType}/>
            )}
          </>
        )}
      </BottomSheet>
    </>
  );
}

export default gestureHandlerRootHOC(Widget)
