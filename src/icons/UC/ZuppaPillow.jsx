import React from 'react';

export const iconData = {
  "id": "ZuppaPillow",
  "name": "ZuppaPillow",
  "category": "UC",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.07 12.00 a 8.93 8.93 0 1 0 17.85 0 a 8.93 8.93 0 1 0 -17.85 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.27 7.54 a 7.73 2.319182289621494 0 1 0 15.46 0 a 7.73 2.319182289621494 0 1 0 -15.46 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.07 12.00 a 8.93 2.6779610384255648 0 1 0 17.85 0 a 8.93 2.6779610384255648 0 1 0 -17.85 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.27 16.46 a 7.73 2.319182289621494 0 1 0 15.46 0 a 7.73 2.319182289621494 0 1 0 -15.46 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.46 4.27 A 2 2 0 0 0 16.46 19.73"
      }
    ],
    [
      "path",
      {
        "d": "M 16.46 4.27 A 2 2 0 0 1 16.46 19.73"
      }
    ],
    [
      "path",
      {
        "d": "M 7.54 4.27 A 2 2 0 0 0 7.54 19.73"
      }
    ],
    [
      "path",
      {
        "d": "M 7.54 4.27 A 2 2 0 0 1 7.54 19.73"
      }
    ]
  ]
};

export const ZuppaPillow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.07 12.00 a 8.93 8.93 0 1 0 17.85 0 a 8.93 8.93 0 1 0 -17.85 0" />
      <path d="M 4.27 7.54 a 7.73 2.319182289621494 0 1 0 15.46 0 a 7.73 2.319182289621494 0 1 0 -15.46 0" />
      <path d="M 3.07 12.00 a 8.93 2.6779610384255648 0 1 0 17.85 0 a 8.93 2.6779610384255648 0 1 0 -17.85 0" />
      <path d="M 4.27 16.46 a 7.73 2.319182289621494 0 1 0 15.46 0 a 7.73 2.319182289621494 0 1 0 -15.46 0" />
      <path d="M 16.46 4.27 A 2 2 0 0 0 16.46 19.73" />
      <path d="M 16.46 4.27 A 2 2 0 0 1 16.46 19.73" />
      <path d="M 7.54 4.27 A 2 2 0 0 0 7.54 19.73" />
      <path d="M 7.54 4.27 A 2 2 0 0 1 7.54 19.73" />
      {children}
    </svg>
  );
});

export default ZuppaPillow;
