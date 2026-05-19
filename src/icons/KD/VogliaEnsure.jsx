import React from 'react';

export const iconData = {
  "id": "VogliaEnsure",
  "name": "VogliaEnsure",
  "category": "KD",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.09 8.69 L 11.18 7.16 L 19.32 5.94 L 16.60 13.71 L 13.59 21.37 L 8.22 15.13 Z"
      }
    ]
  ]
};

export const VogliaEnsure = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.09 8.69 L 11.18 7.16 L 19.32 5.94 L 16.60 13.71 L 13.59 21.37 L 8.22 15.13 Z" />
      {children}
    </svg>
  );
});

export default VogliaEnsure;
