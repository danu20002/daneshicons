import React from 'react';

export const iconData = {
  "id": "VellicoPocket",
  "name": "VellicoPocket",
  "category": "LN",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.11 4.54 L 19.94 8.93 L 20.06 14.75 L 16.40 19.29 L 10.69 20.42 L 5.59 17.60 L 3.48 12.17 L 5.37 6.66 L 10.36 3.64 Z"
      }
    ]
  ]
};

export const VellicoPocket = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.11 4.54 L 19.94 8.93 L 20.06 14.75 L 16.40 19.29 L 10.69 20.42 L 5.59 17.60 L 3.48 12.17 L 5.37 6.66 L 10.36 3.64 Z" />
      {children}
    </svg>
  );
});

export default VellicoPocket;
