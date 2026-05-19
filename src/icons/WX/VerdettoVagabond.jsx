import React from 'react';

export const iconData = {
  "id": "VerdettoVagabond",
  "name": "VerdettoVagabond",
  "category": "WX",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.12 12.38 L 16.23 20.09 L 7.11 19.71 L 2.88 11.62 L 7.77 3.91 L 16.89 4.29 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 18.06 14.21 L 13.11 18.35 L 7.06 16.14 L 5.94 9.79 L 10.89 5.65 L 16.94 7.86 Z"
      }
    ]
  ]
};

export const VerdettoVagabond = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.12 12.38 L 16.23 20.09 L 7.11 19.71 L 2.88 11.62 L 7.77 3.91 L 16.89 4.29 Z" />
      <path d="M 18.06 14.21 L 13.11 18.35 L 7.06 16.14 L 5.94 9.79 L 10.89 5.65 L 16.94 7.86 Z" />
      {children}
    </svg>
  );
});

export default VerdettoVagabond;
