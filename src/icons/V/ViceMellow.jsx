import React from 'react';

export const iconData = {
  "id": "ViceMellow",
  "name": "ViceMellow",
  "category": "V",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.90 15.66 L 6.02 5.42 L 16.41 4.28 L 20.70 13.81 L 12.97 20.84 Z"
      }
    ]
  ]
};

export const ViceMellow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.90 15.66 L 6.02 5.42 L 16.41 4.28 L 20.70 13.81 L 12.97 20.84 Z" />
      {children}
    </svg>
  );
});

export default ViceMellow;
