import { ArrowLeft } from 'phosphor-react';
import React, { FormEvent, useState } from 'react';

import CloseButton from '../../../CloseButton';
import { FeedbackType, feedbackTypes } from '../../common';
import ScreenshotButton from './ScreenshotButton';

interface Props {
  feedbackType: FeedbackType
  onFeedbackSent: () => void
  onFeedbackRestartRequested: () => void
}

const FeedbackContentStep: React.FC<Props> = ({
  feedbackType,
  onFeedbackSent,
  onFeedbackRestartRequested
}) => {
  const [comment, setComment] = useState<string>('')
  const [screenshot, setScreenshot] = useState<string | null>(null)

  const feedbackInfo = feedbackTypes[feedbackType]

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = {
      comment,
      screenshot,
    }

    console.log(data)
    onFeedbackSent()
  }

  return (
    <>
      <header>
        <button
          type='button'
          className='absolute top-5 left-5 text-zinc-400 hover:text-zinc-100'
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight='bold' className='w-4 first-letter:h-4' />
        </button>

        <span className='text-xl leading-6 flex items-center gap-2'>
          <img src={feedbackInfo.image.source} alt={feedbackInfo.image.alt} className='w-6 h-6' />
          {feedbackInfo.title}
        </span>

        <CloseButton />
      </header>

      <form onSubmit={handleSubmit} className='my-4 w-full'>
        <textarea
          onChange={(event) => setComment(event.target.value)}
          className='min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin'
          placeholder='Conte com detalhes o que está acontecendo...'
        />

        <footer className='flex gap-2 mt-2'>
          <ScreenshotButton screenshot={screenshot} onScreenshotTook={setScreenshot} />

          <button
            type="submit"
            disabled={comment.length === 0}
            className='p-2 bg-brand-500 rounded-md border-transparent flex-1 justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500'
          >
            Enviar Feedback
          </button>
        </footer>
      </form>
    </>
  )
}

export default FeedbackContentStep;
