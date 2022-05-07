import React from 'react';

import CloseButton from '../../../CloseButton';
import { FeedbackType, feedbackTypes } from '../../common';

interface Props {
  onFeedbackTypeChanged: (type: FeedbackType) => void
}

const FeedbackTypeStep: React.FC<Props> = ({ onFeedbackTypeChanged }) => {
  return (
    <>
      <header>
        <span className='text-xl leading-6'>
          Deixe seu feedback
        </span>

        <CloseButton />
      </header>

      <div className='flex py-8 gap-2 w-full'>
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <button
            key={key}
            type='button'
            className='bg-zinc-800 rounded-lg w-24 py-5 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none'
            onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
          >
            <img src={value.image.source} alt={value.image.alt} />
            <span>{value.title}</span>
          </button>
        ))}
      </div>
    </>
  )
}

export default FeedbackTypeStep;
