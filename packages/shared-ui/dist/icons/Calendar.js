import * as React from 'react';
const SvgCalendar = props => (<svg width={16} height={16} fill="#475569" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#calendar_svg__a)">
      <path d="M14 3h-1V1a1 1 0 0 0-2 0v2H5V1a1 1 0 0 0-2 0v2H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM2 14V7h12v7H2Z"/>
    </g>
    <defs>
      <clipPath id="calendar_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z"/>
      </clipPath>
    </defs>
  </svg>);
export default SvgCalendar;
//# sourceMappingURL=Calendar.js.map