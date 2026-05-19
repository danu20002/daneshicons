import React from 'react';

export const iconData = {
  "id": "ObliqStalk",
  "name": "ObliqStalk",
  "category": "NB",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.80 9.85 L 10.97 8.60 L 18.46 5.10 L 15.46 12.81 L 14.74 21.04 L 9.57 14.59 Z"
      }
    ]
  ]
};

export const ObliqStalk = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.80 9.85 L 10.97 8.60 L 18.46 5.10 L 15.46 12.81 L 14.74 21.04 L 9.57 14.59 Z" />
      {children}
    </svg>
  );
});

export default ObliqStalk;
