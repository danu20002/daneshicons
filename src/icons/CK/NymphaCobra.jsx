import React from 'react';

export const iconData = {
  "id": "NymphaCobra",
  "name": "NymphaCobra",
  "category": "CK",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.83 20.01 C 21.59 21.23, 5.83 5.51, 10.78 5.09"
      }
    ],
    [
      "path",
      {
        "d": "M 15.99 20.56 L 19.68 14.71"
      }
    ],
    [
      "path",
      {
        "d": "M 9.07 16.18 Q 10.06 21.96 14.40 20.82"
      }
    ]
  ]
};

export const NymphaCobra = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.83 20.01 C 21.59 21.23, 5.83 5.51, 10.78 5.09" />
      <path d="M 15.99 20.56 L 19.68 14.71" />
      <path d="M 9.07 16.18 Q 10.06 21.96 14.40 20.82" />
      {children}
    </svg>
  );
});

export default NymphaCobra;
