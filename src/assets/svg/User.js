import * as React from 'react'
import PropTypes from 'prop-types'

function SvgUser ({ color, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18.5}
      height={19.5}
      {...props}
    >
      <g fill="none" stroke={color} strokeLinecap="round">
        <path
          d="M12.818 11.612a6.131 6.131 0 01-7.137 0A5.329 5.329 0 00.75 16.558v.354a1.786 1.786 0 00.521 1.3 1.834 1.834 0 001.3.539h13.356a1.811 1.811 0 001.822-1.8v-.357a5.34 5.34 0 00-4.931-4.982z"
          strokeLinejoin="round"
          strokeWidth={1.5}
        />
        <path
          d="M5.657 6.031a1.293 1.293 0 011.438-1.06h4.31a1.3 1.3 0 011.442 1.06v.614a3.416 3.416 0 01-3.6 3.183h0a3.414 3.414 0 01-3.59-3.183z"
          strokeLinejoin="round"
        />
        <path
          d="M3.18 9.115h.513a6.091 6.091 0 0011.114 0h.513a.6.6 0 00.607-.6V4.946a.6.6 0 00-.607-.6h-.517a6.091 6.091 0 00-11.114 0H3.18a.6.6 0 00-.607.6v3.569a.6.6 0 00.607.6zM4.004 16.302v2.413M14.648 16.302v2.413"
          strokeLinejoin="round"
          strokeWidth={1.5}
        />
        <path
          strokeWidth={1.5}
          d="M13.609 14.732l1.95-1.95M4.891 14.732l-1.95-1.95"
        />
      </g>
    </svg>
  )
}

SvgUser.propTypes = {
  color: PropTypes.string.isRequired
}

export default SvgUser