import React from 'react';

export const iconData = {
  "id": "TessoSide",
  "name": "TessoSide",
  "category": "PO",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.07 14.23 L 4.09 11.12"
      }
    ],
    [
      "path",
      {
        "d": "M 13.98 17.14 C 4.48 18.67, 13.61 16.89, 16.19 5.02"
      }
    ],
    [
      "path",
      {
        "d": "M 15.77 7.86 Q 5.28 15.89 2.71 2.78"
      }
    ]
  ]
};

export const TessoSide = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.07 14.23 L 4.09 11.12" />
      <path d="M 13.98 17.14 C 4.48 18.67, 13.61 16.89, 16.19 5.02" />
      <path d="M 15.77 7.86 Q 5.28 15.89 2.71 2.78" />
      {children}
    </svg>
  );
});

export default TessoSide;
