import React from 'react';

export const iconData = {
  "id": "PhiloShare",
  "name": "PhiloShare",
  "category": "BG",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.63 5.89 L 18.11 4.63 L 19.37 18.11 L 5.89 19.37 Z"
      }
    ]
  ]
};

export const PhiloShare = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.63 5.89 L 18.11 4.63 L 19.37 18.11 L 5.89 19.37 Z" />
      {children}
    </svg>
  );
});

export default PhiloShare;
