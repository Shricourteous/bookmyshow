import React from 'react'
import { Disclosure } from '@headlessui/react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

const PlayFilters = (props) => {
  return (<Disclosure>
    {({ open }) => (
      <>
        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
          <span className={open? "text-rose-600" : "text-gray-700"}>{props.title}</span>
          {!open?<BiChevronDown/>:<BiChevronUp/>}
        </Disclosure.Button>
        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
          <div className='flex item-center gap-3 flex-wrap'>
            {props.tags.map((tag, index)=>(
            <div key={index} className='border-2 border-gray-200 px-3 py-2 rounded'>
              <span className='text-red-600'>{tag}</span>
            </div>
          ))}
          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>)
}

export default PlayFilters;