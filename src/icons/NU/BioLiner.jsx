import React from 'react';

export const iconData = {
  "id": "BioLiner",
  "name": "BioLiner",
  "category": "NU",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.53 6.70 L 15.67 12.64 L 17.30 19.53 L 11.36 15.67 L 4.47 17.30 L 8.33 11.36 L 6.70 4.47 L 12.64 8.33 Z"
      }
    ]
  ]
};

export const BioLiner = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.53 6.70 L 15.67 12.64 L 17.30 19.53 L 11.36 15.67 L 4.47 17.30 L 8.33 11.36 L 6.70 4.47 L 12.64 8.33 Z" />
      {children}
    </svg>
  );
});

export default BioLiner;
