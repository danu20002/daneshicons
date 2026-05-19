import React from 'react';

export const iconData = {
  "id": "StridoPenalty",
  "name": "StridoPenalty",
  "category": "WX",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.73 12.00 L 17.27 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.27 12.00 L 13.93 9.99"
      }
    ],
    [
      "path",
      {
        "d": "M 17.27 12.00 L 13.93 14.01"
      }
    ]
  ]
};

export const StridoPenalty = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.73 12.00 L 17.27 12.00" />
      <path d="M 17.27 12.00 L 13.93 9.99" />
      <path d="M 17.27 12.00 L 13.93 14.01" />
      {children}
    </svg>
  );
});

export default StridoPenalty;
