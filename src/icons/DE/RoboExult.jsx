import React from 'react';

export const iconData = {
  "id": "RoboExult",
  "name": "RoboExult",
  "category": "DE",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.00 3.16 L 17.76 12.00 L 12.00 20.84 L 6.24 12.00 Z"
      }
    ]
  ]
};

export const RoboExult = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.00 3.16 L 17.76 12.00 L 12.00 20.84 L 6.24 12.00 Z" />
      {children}
    </svg>
  );
});

export default RoboExult;
