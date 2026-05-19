import React from 'react';

export const iconData = {
  "id": "AeroMerry",
  "name": "AeroMerry",
  "category": "XD",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.68 4.98 L 19.02 5.68 L 18.32 19.02 L 4.98 18.32 Z"
      }
    ]
  ]
};

export const AeroMerry = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.68 4.98 L 19.02 5.68 L 18.32 19.02 L 4.98 18.32 Z" />
      {children}
    </svg>
  );
});

export default AeroMerry;
