import React from 'react';

export const iconData = {
  "id": "OxyKiss",
  "name": "OxyKiss",
  "category": "KK",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.25 12.00 Q 13.97 12.81 18.54 18.54"
      }
    ],
    [
      "path",
      {
        "d": "M 18.54 18.54 Q 12.81 13.97 12.00 21.25"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 21.25 Q 11.19 13.97 5.46 18.54"
      }
    ],
    [
      "path",
      {
        "d": "M 5.46 18.54 Q 10.03 12.81 2.75 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.75 12.00 Q 10.03 11.19 5.46 5.46"
      }
    ],
    [
      "path",
      {
        "d": "M 5.46 5.46 Q 11.19 10.03 12.00 2.75"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.75 Q 12.81 10.03 18.54 5.46"
      }
    ],
    [
      "path",
      {
        "d": "M 18.54 5.46 Q 13.97 11.19 21.25 12.00"
      }
    ]
  ]
};

export const OxyKiss = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.25 12.00 Q 13.97 12.81 18.54 18.54" />
      <path d="M 18.54 18.54 Q 12.81 13.97 12.00 21.25" />
      <path d="M 12.00 21.25 Q 11.19 13.97 5.46 18.54" />
      <path d="M 5.46 18.54 Q 10.03 12.81 2.75 12.00" />
      <path d="M 2.75 12.00 Q 10.03 11.19 5.46 5.46" />
      <path d="M 5.46 5.46 Q 11.19 10.03 12.00 2.75" />
      <path d="M 12.00 2.75 Q 12.81 10.03 18.54 5.46" />
      <path d="M 18.54 5.46 Q 13.97 11.19 21.25 12.00" />
      {children}
    </svg>
  );
});

export default OxyKiss;
