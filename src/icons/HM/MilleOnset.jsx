import React from 'react';

export const iconData = {
  "id": "MilleOnset",
  "name": "MilleOnset",
  "category": "HM",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.03 10.57 L 14.03 10.57"
      }
    ],
    [
      "path",
      {
        "d": "M 13.43 10.03 L 13.43 14.03"
      }
    ],
    [
      "path",
      {
        "d": "M 13.97 13.43 L 9.97 13.43"
      }
    ],
    [
      "path",
      {
        "d": "M 10.57 13.97 L 10.57 9.97"
      }
    ]
  ]
};

export const MilleOnset = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.03 10.57 L 14.03 10.57" />
      <path d="M 13.43 10.03 L 13.43 14.03" />
      <path d="M 13.97 13.43 L 9.97 13.43" />
      <path d="M 10.57 13.97 L 10.57 9.97" />
      {children}
    </svg>
  );
});

export default MilleOnset;
