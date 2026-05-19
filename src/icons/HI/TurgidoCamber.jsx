import React from 'react';

export const iconData = {
  "id": "TurgidoCamber",
  "name": "TurgidoCamber",
  "category": "HI",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.85 7.88 C 15.54 17.79, 15.35 11.71, 14.59 14.74"
      }
    ],
    [
      "path",
      {
        "d": "M 3.47 5.03 C 7.03 12.09, 19.36 11.58, 17.76 20.34"
      }
    ],
    [
      "path",
      {
        "d": "M 9.38 2.01 C 18.76 11.46, 5.65 4.43, 19.57 20.07"
      }
    ]
  ]
};

export const TurgidoCamber = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.85 7.88 C 15.54 17.79, 15.35 11.71, 14.59 14.74" />
      <path d="M 3.47 5.03 C 7.03 12.09, 19.36 11.58, 17.76 20.34" />
      <path d="M 9.38 2.01 C 18.76 11.46, 5.65 4.43, 19.57 20.07" />
      {children}
    </svg>
  );
});

export default TurgidoCamber;
