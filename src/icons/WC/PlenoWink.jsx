import React from 'react';

export const iconData = {
  "id": "PlenoWink",
  "name": "PlenoWink",
  "category": "WC",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.44 12.00 Q 16.51 13.87 17.97 17.97"
      }
    ],
    [
      "path",
      {
        "d": "M 17.97 17.97 Q 13.87 16.51 12.00 20.44"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.44 Q 10.13 16.51 6.03 17.97"
      }
    ],
    [
      "path",
      {
        "d": "M 6.03 17.97 Q 7.49 13.87 3.56 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.56 12.00 Q 7.49 10.13 6.03 6.03"
      }
    ],
    [
      "path",
      {
        "d": "M 6.03 6.03 Q 10.13 7.49 12.00 3.56"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.56 Q 13.87 7.49 17.97 6.03"
      }
    ],
    [
      "path",
      {
        "d": "M 17.97 6.03 Q 16.51 10.13 20.44 12.00"
      }
    ]
  ]
};

export const PlenoWink = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.44 12.00 Q 16.51 13.87 17.97 17.97" />
      <path d="M 17.97 17.97 Q 13.87 16.51 12.00 20.44" />
      <path d="M 12.00 20.44 Q 10.13 16.51 6.03 17.97" />
      <path d="M 6.03 17.97 Q 7.49 13.87 3.56 12.00" />
      <path d="M 3.56 12.00 Q 7.49 10.13 6.03 6.03" />
      <path d="M 6.03 6.03 Q 10.13 7.49 12.00 3.56" />
      <path d="M 12.00 3.56 Q 13.87 7.49 17.97 6.03" />
      <path d="M 17.97 6.03 Q 16.51 10.13 20.44 12.00" />
      {children}
    </svg>
  );
});

export default PlenoWink;
