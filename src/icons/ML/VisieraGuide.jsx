import React from 'react';

export const iconData = {
  "id": "VisieraGuide",
  "name": "VisieraGuide",
  "category": "ML",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.37 5.91 C 11.31 19.99, 16.17 6.00, 19.02 17.75"
      }
    ],
    [
      "path",
      {
        "d": "M 9.69 7.85 C 11.75 16.60, 13.21 7.14, 17.30 18.84"
      }
    ],
    [
      "path",
      {
        "d": "M 5.58 2.97 C 12.82 7.17, 18.96 14.63, 21.17 17.30"
      }
    ],
    [
      "path",
      {
        "d": "M 4.21 5.53 C 9.43 7.83, 8.24 11.56, 21.30 18.35"
      }
    ]
  ]
};

export const VisieraGuide = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.37 5.91 C 11.31 19.99, 16.17 6.00, 19.02 17.75" />
      <path d="M 9.69 7.85 C 11.75 16.60, 13.21 7.14, 17.30 18.84" />
      <path d="M 5.58 2.97 C 12.82 7.17, 18.96 14.63, 21.17 17.30" />
      <path d="M 4.21 5.53 C 9.43 7.83, 8.24 11.56, 21.30 18.35" />
      {children}
    </svg>
  );
});

export default VisieraGuide;
