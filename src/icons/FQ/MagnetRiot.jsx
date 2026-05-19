import React from 'react';

export const iconData = {
  "id": "MagnetRiot",
  "name": "MagnetRiot",
  "category": "FQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.23 4.48 L 16.40 19.42 L 3.37 12.10 Z"
      }
    ]
  ]
};

export const MagnetRiot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.23 4.48 L 16.40 19.42 L 3.37 12.10 Z" />
      {children}
    </svg>
  );
});

export default MagnetRiot;
