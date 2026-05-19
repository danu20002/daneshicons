import React from 'react';

export const iconData = {
  "id": "NigroRequest",
  "name": "NigroRequest",
  "category": "QC",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.29 2.77 C 13.31 12.89, 16.46 7.47, 16.47 17.02"
      }
    ],
    [
      "path",
      {
        "d": "M 4.39 8.43 C 14.04 17.11, 10.24 9.16, 16.03 18.85"
      }
    ],
    [
      "path",
      {
        "d": "M 9.53 5.26 C 14.61 11.78, 17.46 19.54, 15.37 19.14"
      }
    ]
  ]
};

export const NigroRequest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.29 2.77 C 13.31 12.89, 16.46 7.47, 16.47 17.02" />
      <path d="M 4.39 8.43 C 14.04 17.11, 10.24 9.16, 16.03 18.85" />
      <path d="M 9.53 5.26 C 14.61 11.78, 17.46 19.54, 15.37 19.14" />
      {children}
    </svg>
  );
});

export default NigroRequest;
