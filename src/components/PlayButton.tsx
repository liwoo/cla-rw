import { LargeButton } from '@/components/LargeButton'
import {
  MicrophoneIcon,
  PlayCircleIcon,
  SpeakerWaveIcon,
} from '@heroicons/react/20/solid'
import { ClassValue } from 'clsx'
import { HTMLAttributes } from 'react'

type ModifiedHTMLAttributes<T> = Omit<HTMLAttributes<T>, 'className'> & {
  className?: ClassValue
}

interface PlayButtonProps extends ModifiedHTMLAttributes<HTMLDivElement> {
  type?: 'video' | 'audio'
}

const PlayButton = ({ type = 'video',className }: PlayButtonProps) => {
  const isVideo = type == 'video'
  return (
    <LargeButton
      outlined={!isVideo}
      buttonType={isVideo ? 'Primary' : 'Secondary'}
      className={className}
    >
      <div className="flex items-center">
        {isVideo ? (
          <PlayCircleIcon className="mr-4 h-10" />
        ) : (
          <MicrophoneIcon className="mr-4 h-7" />
        )}
        <span>{isVideo ? 'Video' : 'Audio'}</span>
      </div>
    </LargeButton>
  )
}

export default PlayButton
