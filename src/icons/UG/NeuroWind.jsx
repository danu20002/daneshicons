import React from 'react';

export const iconData = {
  "id": "NeuroWind",
  "name": "NeuroWind",
  "category": "UG",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.24 14.64 L 15.96 19.70 L 9.36 20.24 L 4.30 15.96 L 3.76 9.36 L 8.04 4.30 L 14.64 3.76 L 19.70 8.04 Z"
      }
    ]
  ]
};

export const NeuroWind = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.24 14.64 L 15.96 19.70 L 9.36 20.24 L 4.30 15.96 L 3.76 9.36 L 8.04 4.30 L 14.64 3.76 L 19.70 8.04 Z" />
      {children}
    </svg>
  );
});

export default NeuroWind;
