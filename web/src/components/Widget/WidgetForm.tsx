import React, { useState } from 'react';

import { FeedbackType } from './common';
import FeedbackContentStep from './steps/FeedbackContentStep';
import FeedbackSuccessStep from './steps/FeedbackSuccessStep';
import FeedbackTypeStep from './steps/FeedbackTypeStep';


const WidgetForm: React.FC = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [isFeedbackSent, setIsFeedbackSent] = useState(false)

  function handleRestartFeedback() {
    setIsFeedbackSent(false)
    setFeedbackType(null)
  }

  return (
    <div className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto'>

      {isFeedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback}/>
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setIsFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer className='text-xs text-neutral-400'>
        Feito com ♥ por <a className='underline underline-offset-2' href="https://idaslon.netlify.app/" target="_blank">Darlon</a>
      </footer>
    </div>
  )
}

export default WidgetForm;
