import React from 'react';

export const iconData = {
  "id": "UliginoContact",
  "name": "UliginoContact",
  "category": "SM",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.68 21.66 L 7.31 19.81"
      }
    ],
    [
      "path",
      {
        "d": "M 14.26 14.32 L 12.53 17.86"
      }
    ],
    [
      "path",
      {
        "d": "M 16.15 13.16 A 6.27 2.83 165 0 1 10.00 16.41"
      }
    ],
    [
      "path",
      {
        "d": "M 12.30 2.25 L 5.64 18.05"
      }
    ],
    [
      "path",
      {
        "d": "M 4.92 11.48 A 2.43 4.04 143 0 1 17.76 4.49"
      }
    ]
  ]
};

export const UliginoContact = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      <path d="M 2.68 21.66 L 7.31 19.81" />
      <path d="M 14.26 14.32 L 12.53 17.86" />
      <path d="M 16.15 13.16 A 6.27 2.83 165 0 1 10.00 16.41" />
      <path d="M 12.30 2.25 L 5.64 18.05" />
      <path d="M 4.92 11.48 A 2.43 4.04 143 0 1 17.76 4.49" />
      {children}
    </svg>
  );
});

export default UliginoContact;
