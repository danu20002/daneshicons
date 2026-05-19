import React from 'react';

export const iconData = {
  "id": "LacunoTravel",
  "name": "LacunoTravel",
  "category": "Q",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.57 12.00 a 8.43 8.43 0 1 0 16.85 0 a 8.43 8.43 0 1 0 -16.85 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.26 6.94 a 6.74 2.022407536245882 0 1 0 13.48 0 a 6.74 2.022407536245882 0 1 0 -13.48 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.74 10.31 a 8.26 2.4769332578808436 0 1 0 16.51 0 a 8.26 2.4769332578808436 0 1 0 -16.51 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.74 13.69 a 8.26 2.4769332578808436 0 1 0 16.51 0 a 8.26 2.4769332578808436 0 1 0 -16.51 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.26 17.06 a 6.74 2.0224075362458827 0 1 0 13.48 0 a 6.74 2.0224075362458827 0 1 0 -13.48 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.57 A 2 2 0 0 0 12.00 20.43"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.57 A 2 2 0 0 1 12.00 20.43"
      }
    ]
  ]
};

export const LacunoTravel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.57 12.00 a 8.43 8.43 0 1 0 16.85 0 a 8.43 8.43 0 1 0 -16.85 0" />
      <path d="M 5.26 6.94 a 6.74 2.022407536245882 0 1 0 13.48 0 a 6.74 2.022407536245882 0 1 0 -13.48 0" />
      <path d="M 3.74 10.31 a 8.26 2.4769332578808436 0 1 0 16.51 0 a 8.26 2.4769332578808436 0 1 0 -16.51 0" />
      <path d="M 3.74 13.69 a 8.26 2.4769332578808436 0 1 0 16.51 0 a 8.26 2.4769332578808436 0 1 0 -16.51 0" />
      <path d="M 5.26 17.06 a 6.74 2.0224075362458827 0 1 0 13.48 0 a 6.74 2.0224075362458827 0 1 0 -13.48 0" />
      <path d="M 12.00 3.57 A 2 2 0 0 0 12.00 20.43" />
      <path d="M 12.00 3.57 A 2 2 0 0 1 12.00 20.43" />
      {children}
    </svg>
  );
});

export default LacunoTravel;
