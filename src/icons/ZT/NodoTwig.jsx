import React from 'react';

export const iconData = {
  "id": "NodoTwig",
  "name": "NodoTwig",
  "category": "ZT",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.06 8.63 L 11.06 8.63"
      }
    ],
    [
      "path",
      {
        "d": "M 17.39 9.41 L 15.39 12.87"
      }
    ],
    [
      "path",
      {
        "d": "M 11.55 17.96 L 9.55 14.50"
      }
    ]
  ]
};

export const NodoTwig = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.06 8.63 L 11.06 8.63" />
      <path d="M 17.39 9.41 L 15.39 12.87" />
      <path d="M 11.55 17.96 L 9.55 14.50" />
      {children}
    </svg>
  );
});

export default NodoTwig;
