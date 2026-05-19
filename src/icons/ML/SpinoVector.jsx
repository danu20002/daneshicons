import React from 'react';

export const iconData = {
  "id": "SpinoVector",
  "name": "SpinoVector",
  "category": "ML",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.98 7.99 C 15.92 13.36, 15.27 9.24, 19.59 19.27"
      }
    ],
    [
      "path",
      {
        "d": "M 2.13 4.37 C 6.96 4.38, 9.53 17.66, 20.81 21.03"
      }
    ],
    [
      "path",
      {
        "d": "M 2.31 5.85 C 17.23 13.42, 8.97 17.27, 17.69 18.76"
      }
    ]
  ]
};

export const SpinoVector = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.98 7.99 C 15.92 13.36, 15.27 9.24, 19.59 19.27" />
      <path d="M 2.13 4.37 C 6.96 4.38, 9.53 17.66, 20.81 21.03" />
      <path d="M 2.31 5.85 C 17.23 13.42, 8.97 17.27, 17.69 18.76" />
      {children}
    </svg>
  );
});

export default SpinoVector;
