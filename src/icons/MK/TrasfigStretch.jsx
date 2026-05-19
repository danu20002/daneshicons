import React from 'react';

export const iconData = {
  "id": "TrasfigStretch",
  "name": "TrasfigStretch",
  "category": "MK",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.62 12.00 a 2.38 2.38 0 1 0 4.75 0 a 2.38 2.38 0 1 0 -4.75 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.23 12.00 a 4.77 4.77 0 1 0 9.54 0 a 4.77 4.77 0 1 0 -9.54 0",
        "stroke-dasharray": "2 2"
      }
    ],
    [
      "path",
      {
        "d": "M 4.47 12.00 a 7.53 7.53 0 1 0 15.07 0 a 7.53 7.53 0 1 0 -15.07 0"
      }
    ]
  ]
};

export const TrasfigStretch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.62 12.00 a 2.38 2.38 0 1 0 4.75 0 a 2.38 2.38 0 1 0 -4.75 0" />
      <path d="M 7.23 12.00 a 4.77 4.77 0 1 0 9.54 0 a 4.77 4.77 0 1 0 -9.54 0" stroke-dasharray="2 2" />
      <path d="M 4.47 12.00 a 7.53 7.53 0 1 0 15.07 0 a 7.53 7.53 0 1 0 -15.07 0" />
      {children}
    </svg>
  );
});

export default TrasfigStretch;
