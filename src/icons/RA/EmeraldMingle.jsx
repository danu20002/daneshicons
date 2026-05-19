import React from 'react';

export const iconData = {
  "id": "EmeraldMingle",
  "name": "EmeraldMingle",
  "category": "RA",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.00 9.22 L 21.79 19.93"
      }
    ],
    [
      "path",
      {
        "d": "M 19.03 18.28 Q 13.50 4.36 8.72 7.65"
      }
    ],
    [
      "path",
      {
        "d": "M 9.74 21.76 L 7.38 16.75 L 20.33 7.65 L 10.49 12.22 L 9.01 14.62 L 19.34 12.61"
      }
    ]
  ]
};

export const EmeraldMingle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.00 9.22 L 21.79 19.93" />
      <path d="M 19.03 18.28 Q 13.50 4.36 8.72 7.65" />
      <path d="M 9.74 21.76 L 7.38 16.75 L 20.33 7.65 L 10.49 12.22 L 9.01 14.62 L 19.34 12.61" />
      {children}
    </svg>
  );
});

export default EmeraldMingle;
