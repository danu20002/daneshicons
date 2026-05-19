import React from 'react';

export const iconData = {
  "id": "SucroDrier",
  "name": "SucroDrier",
  "category": "NE",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.16 4.21 C 19.28 11.52, 9.18 17.55, 21.96 14.32"
      }
    ],
    [
      "path",
      {
        "d": "M 5.84 6.37 C 10.24 16.40, 5.33 7.19, 18.58 20.96"
      }
    ],
    [
      "path",
      {
        "d": "M 2.97 9.29 C 4.97 11.25, 15.69 10.25, 19.73 17.78"
      }
    ]
  ]
};

export const SucroDrier = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.16 4.21 C 19.28 11.52, 9.18 17.55, 21.96 14.32" />
      <path d="M 5.84 6.37 C 10.24 16.40, 5.33 7.19, 18.58 20.96" />
      <path d="M 2.97 9.29 C 4.97 11.25, 15.69 10.25, 19.73 17.78" />
      {children}
    </svg>
  );
});

export default SucroDrier;
