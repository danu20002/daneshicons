import React from 'react';

export const iconData = {
  "id": "StyloStrength",
  "name": "StyloStrength",
  "category": "GG",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.17 6.00 L 19.83 6.00 L 19.83 18.00 L 4.17 18.00 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.17 6.00 L 7.61 2.56 L 23.28 2.56 L 19.83 6.00"
      }
    ],
    [
      "path",
      {
        "d": "M 19.83 6.00 L 23.28 2.56 L 23.28 14.55 L 19.83 18.00"
      }
    ]
  ]
};

export const StyloStrength = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.17 6.00 L 19.83 6.00 L 19.83 18.00 L 4.17 18.00 Z" />
      <path d="M 4.17 6.00 L 7.61 2.56 L 23.28 2.56 L 19.83 6.00" />
      <path d="M 19.83 6.00 L 23.28 2.56 L 23.28 14.55 L 19.83 18.00" />
      {children}
    </svg>
  );
});

export default StyloStrength;
