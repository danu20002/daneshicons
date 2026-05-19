import React from 'react';

export const iconData = {
  "id": "VendemRudder",
  "name": "VendemRudder",
  "category": "NS",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.27 13.15 L 7.89 3.10 L 19.20 5.34 L 20.55 16.79 L 10.09 21.61 Z"
      }
    ]
  ]
};

export const VendemRudder = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.27 13.15 L 7.89 3.10 L 19.20 5.34 L 20.55 16.79 L 10.09 21.61 Z" />
      {children}
    </svg>
  );
});

export default VendemRudder;
