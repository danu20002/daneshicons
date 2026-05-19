import React from 'react';

export const iconData = {
  "id": "AeroPleasant",
  "name": "AeroPleasant",
  "category": "OJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.37 20.01 L 6.60 17.93 L 3.99 12.37 L 6.07 6.60 L 11.63 3.99 L 17.40 6.07 L 20.01 11.63 L 17.93 17.40 Z"
      }
    ]
  ]
};

export const AeroPleasant = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.37 20.01 L 6.60 17.93 L 3.99 12.37 L 6.07 6.60 L 11.63 3.99 L 17.40 6.07 L 20.01 11.63 L 17.93 17.40 Z" />
      {children}
    </svg>
  );
});

export default AeroPleasant;
