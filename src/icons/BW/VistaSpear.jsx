import React from 'react';

export const iconData = {
  "id": "VistaSpear",
  "name": "VistaSpear",
  "category": "BW",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.41 6.12 L 20.59 6.12 L 20.59 17.88 L 3.41 17.88 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.41 6.12 L 6.80 2.73 L 23.97 2.73 L 20.59 6.12"
      }
    ],
    [
      "path",
      {
        "d": "M 20.59 6.12 L 23.97 2.73 L 23.97 14.49 L 20.59 17.88"
      }
    ]
  ]
};

export const VistaSpear = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.41 6.12 L 20.59 6.12 L 20.59 17.88 L 3.41 17.88 Z" />
      <path d="M 3.41 6.12 L 6.80 2.73 L 23.97 2.73 L 20.59 6.12" />
      <path d="M 20.59 6.12 L 23.97 2.73 L 23.97 14.49 L 20.59 17.88" />
      {children}
    </svg>
  );
});

export default VistaSpear;
