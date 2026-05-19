import React from 'react';

export const iconData = {
  "id": "VaranoFinish",
  "name": "VaranoFinish",
  "category": "GC",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.51 12.00 L 16.49 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.49 12.00 L 11.91 9.25"
      }
    ],
    [
      "path",
      {
        "d": "M 16.49 12.00 L 11.91 14.75"
      }
    ]
  ]
};

export const VaranoFinish = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.51 12.00 L 16.49 12.00" />
      <path d="M 16.49 12.00 L 11.91 9.25" />
      <path d="M 16.49 12.00 L 11.91 14.75" />
      {children}
    </svg>
  );
});

export default VaranoFinish;
