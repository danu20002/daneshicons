import React from 'react';

export const iconData = {
  "id": "CryptProp",
  "name": "CryptProp",
  "category": "GP",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.50 2.24 C 11.66 9.52, 14.43 13.89, 15.78 20.12"
      }
    ],
    [
      "path",
      {
        "d": "M 9.25 5.94 C 14.46 7.36, 12.24 17.65, 18.54 21.99"
      }
    ],
    [
      "path",
      {
        "d": "M 9.72 8.23 C 14.59 18.04, 19.75 4.58, 20.60 14.48"
      }
    ],
    [
      "path",
      {
        "d": "M 5.80 2.56 C 13.23 12.90, 12.79 7.64, 16.48 21.70"
      }
    ],
    [
      "path",
      {
        "d": "M 6.03 2.82 C 7.64 6.53, 18.61 18.48, 20.93 18.82"
      }
    ]
  ]
};

export const CryptProp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.50 2.24 C 11.66 9.52, 14.43 13.89, 15.78 20.12" />
      <path d="M 9.25 5.94 C 14.46 7.36, 12.24 17.65, 18.54 21.99" />
      <path d="M 9.72 8.23 C 14.59 18.04, 19.75 4.58, 20.60 14.48" />
      <path d="M 5.80 2.56 C 13.23 12.90, 12.79 7.64, 16.48 21.70" />
      <path d="M 6.03 2.82 C 7.64 6.53, 18.61 18.48, 20.93 18.82" />
      {children}
    </svg>
  );
});

export default CryptProp;
