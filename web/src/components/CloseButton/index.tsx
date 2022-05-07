import { Popover } from '@headlessui/react';
import { X } from 'phosphor-react';
import React from 'react';

const CloseButton: React.FC = () => {
  return(
    <Popover.Button className='absolute top-5 right-5 text-zinc-400 hover:text-zinc-400' title='Fechar formulário de feedback'>
      <X className='w-4 h-4' weight='bold' />
    </Popover.Button>
  )
}

export default CloseButton;
