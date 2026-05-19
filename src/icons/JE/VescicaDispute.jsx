import React from 'react';

export const iconData = {
  "id": "VescicaDispute",
  "name": "VescicaDispute",
  "category": "JE",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.68 6.02 L 20.32 6.02 L 20.32 17.98 L 3.68 17.98 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.68 6.02 L 7.69 2.01 L 24.33 2.01 L 20.32 6.02"
      }
    ],
    [
      "path",
      {
        "d": "M 20.32 6.02 L 24.33 2.01 L 24.33 13.97 L 20.32 17.98"
      }
    ]
  ]
};

export const VescicaDispute = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.68 6.02 L 20.32 6.02 L 20.32 17.98 L 3.68 17.98 Z" />
      <path d="M 3.68 6.02 L 7.69 2.01 L 24.33 2.01 L 20.32 6.02" />
      <path d="M 20.32 6.02 L 24.33 2.01 L 24.33 13.97 L 20.32 17.98" />
      {children}
    </svg>
  );
});

export default VescicaDispute;
