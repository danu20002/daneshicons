import React from 'react';

export const iconData = {
  "id": "RivoSage",
  "name": "RivoSage",
  "category": "VP",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.03 5.92 L 20.97 5.92 L 20.97 18.08 L 3.03 18.08 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.03 5.92 L 7.78 1.16 L 25.73 1.16 L 20.97 5.92"
      }
    ],
    [
      "path",
      {
        "d": "M 20.97 5.92 L 25.73 1.16 L 25.73 13.32 L 20.97 18.08"
      }
    ]
  ]
};

export const RivoSage = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.03 5.92 L 20.97 5.92 L 20.97 18.08 L 3.03 18.08 Z" />
      <path d="M 3.03 5.92 L 7.78 1.16 L 25.73 1.16 L 20.97 5.92" />
      <path d="M 20.97 5.92 L 25.73 1.16 L 25.73 13.32 L 20.97 18.08" />
      {children}
    </svg>
  );
});

export default RivoSage;
