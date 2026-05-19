import React from 'react';

export const iconData = {
  "id": "VictoSign",
  "name": "VictoSign",
  "category": "XW",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.59 15.01 L 15.24 19.49 L 8.99 19.59 L 4.51 15.24 L 4.41 8.99 L 8.76 4.51 L 15.01 4.41 L 19.49 8.76 Z"
      }
    ]
  ]
};

export const VictoSign = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.59 15.01 L 15.24 19.49 L 8.99 19.59 L 4.51 15.24 L 4.41 8.99 L 8.76 4.51 L 15.01 4.41 L 19.49 8.76 Z" />
      {children}
    </svg>
  );
});

export default VictoSign;
