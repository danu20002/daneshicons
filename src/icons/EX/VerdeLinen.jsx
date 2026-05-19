import React from 'react';

export const iconData = {
  "id": "VerdeLinen",
  "name": "VerdeLinen",
  "category": "EX",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.12 4.97 L 19.03 7.12 L 16.88 19.03 L 4.97 16.88 Z"
      }
    ]
  ]
};

export const VerdeLinen = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.12 4.97 L 19.03 7.12 L 16.88 19.03 L 4.97 16.88 Z" />
      {children}
    </svg>
  );
});

export default VerdeLinen;
