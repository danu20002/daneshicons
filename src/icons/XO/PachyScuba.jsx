import React from 'react';

export const iconData = {
  "id": "PachyScuba",
  "name": "PachyScuba",
  "category": "XO",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.94 8.67 L 14.94 8.67"
      }
    ],
    [
      "path",
      {
        "d": "M 15.33 10.94 L 15.33 14.94"
      }
    ],
    [
      "path",
      {
        "d": "M 13.06 15.33 L 9.06 15.33"
      }
    ],
    [
      "path",
      {
        "d": "M 8.67 13.06 L 8.67 9.06"
      }
    ]
  ]
};

export const PachyScuba = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.94 8.67 L 14.94 8.67" />
      <path d="M 15.33 10.94 L 15.33 14.94" />
      <path d="M 13.06 15.33 L 9.06 15.33" />
      <path d="M 8.67 13.06 L 8.67 9.06" />
      {children}
    </svg>
  );
});

export default PachyScuba;
