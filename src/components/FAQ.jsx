import React from 'react'
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { MinusCircleIcon } from "@heroicons/react/24/solid";

const FAQ = () => {
  return (
    <div className='faq-container container'>
        <h3>FAQ</h3>
        <div className='list-container'>
            <div className='list-item'>
                <p>How does an investor gain access to MF Utility?</p>
                <PlusCircleIcon className='lg-icon' />
            </div>
            <div className='list-item'>
                <p>Culpa duis officia pariatur ut ut magna exercitation laborum ad consequat.</p>
                < MinusCircleIcon className='lg-icon' />
            </div>
                <p>Cupidatat mollit aliqua consectetur voluptate aliquip cillum laborum irure reprehenderit. Consequat do minim occaecat do ea commodo commodo. Sint enim do labore est. Officia ea eu sint aliqua quis ea reprehenderit sunt aliqua sit veniam elit incididunt. Cupidatat proident sit officia sint nulla id qui minim culpa sunt. Ullamco consequat est sit tempor Lorem occaecat laborum ipsum fugiat eiusmod ad. Ea in quis amet nostrud commodo adipisicing.</p>
            <div className='list-item'>
                <p>How does an investor gain access to MF Utility?</p>
                <PlusCircleIcon className='lg-icon' />
            </div>
        </div>
    </div>
  )
}

export default FAQ