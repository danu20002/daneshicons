import React from 'react';

export const iconData = {
  "id": "PicoSlit",
  "name": "PicoSlit",
  "category": "ZA",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.34 12.00 Q 14.80 13.61 16.67 20.09"
      }
    ],
    [
      "path",
      {
        "d": "M 16.67 20.09 Q 12.00 15.23 7.33 20.09"
      }
    ],
    [
      "path",
      {
        "d": "M 7.33 20.09 Q 9.20 13.61 2.66 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.66 12.00 Q 9.20 10.39 7.33 3.91"
      }
    ],
    [
      "path",
      {
        "d": "M 7.33 3.91 Q 12.00 8.77 16.67 3.91"
      }
    ],
    [
      "path",
      {
        "d": "M 16.67 3.91 Q 14.80 10.39 21.34 12.00"
      }
    ]
  ]
};

export const PicoSlit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.34 12.00 Q 14.80 13.61 16.67 20.09" />
      <path d="M 16.67 20.09 Q 12.00 15.23 7.33 20.09" />
      <path d="M 7.33 20.09 Q 9.20 13.61 2.66 12.00" />
      <path d="M 2.66 12.00 Q 9.20 10.39 7.33 3.91" />
      <path d="M 7.33 3.91 Q 12.00 8.77 16.67 3.91" />
      <path d="M 16.67 3.91 Q 14.80 10.39 21.34 12.00" />
      {children}
    </svg>
  );
});

export default PicoSlit;
