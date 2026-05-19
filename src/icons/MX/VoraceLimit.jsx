import React from 'react';

export const iconData = {
  "id": "VoraceLimit",
  "name": "VoraceLimit",
  "category": "MX",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.70 5.37 L 20.12 11.54 L 17.42 18.06 L 10.64 20.02 L 4.88 15.93 L 4.49 8.89 L 9.75 4.19 Z"
      }
    ]
  ]
};

export const VoraceLimit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.70 5.37 L 20.12 11.54 L 17.42 18.06 L 10.64 20.02 L 4.88 15.93 L 4.49 8.89 L 9.75 4.19 Z" />
      {children}
    </svg>
  );
});

export default VoraceLimit;
