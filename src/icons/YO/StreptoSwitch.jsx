import React from 'react';

export const iconData = {
  "id": "StreptoSwitch",
  "name": "StreptoSwitch",
  "category": "YO",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.63 12.00 a 8.37 8.37 0 1 0 16.75 0 a 8.37 8.37 0 1 0 -16.75 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.48 12.00 a 6.52 6.52 0 1 1 13.04 0 a 6.52 6.52 0 1 1 -13.04 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.87 12.00 L 21.87 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.57 17.57 L 18.98 18.98"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.87 L 12.00 21.87"
      }
    ],
    [
      "path",
      {
        "d": "M 6.43 17.57 L 5.02 18.98"
      }
    ],
    [
      "path",
      {
        "d": "M 4.13 12.00 L 2.13 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.43 6.43 L 5.02 5.02"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.13 L 12.00 2.13"
      }
    ],
    [
      "path",
      {
        "d": "M 17.57 6.43 L 18.98 5.02"
      }
    ]
  ]
};

export const StreptoSwitch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.63 12.00 a 8.37 8.37 0 1 0 16.75 0 a 8.37 8.37 0 1 0 -16.75 0" />
      <path d="M 5.48 12.00 a 6.52 6.52 0 1 1 13.04 0 a 6.52 6.52 0 1 1 -13.04 0" />
      <path d="M 19.87 12.00 L 21.87 12.00" />
      <path d="M 17.57 17.57 L 18.98 18.98" />
      <path d="M 12.00 19.87 L 12.00 21.87" />
      <path d="M 6.43 17.57 L 5.02 18.98" />
      <path d="M 4.13 12.00 L 2.13 12.00" />
      <path d="M 6.43 6.43 L 5.02 5.02" />
      <path d="M 12.00 4.13 L 12.00 2.13" />
      <path d="M 17.57 6.43 L 18.98 5.02" />
      {children}
    </svg>
  );
});

export default StreptoSwitch;
