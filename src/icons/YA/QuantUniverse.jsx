import React from 'react';

export const iconData = {
  "id": "QuantUniverse",
  "name": "QuantUniverse",
  "category": "YA",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.25 3.95 L 13.02 8.05 L 20.05 7.25 L 15.95 13.02 L 16.75 20.05 L 10.98 15.95 L 3.95 16.75 L 8.05 10.98 Z"
      }
    ]
  ]
};

export const QuantUniverse = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.25 3.95 L 13.02 8.05 L 20.05 7.25 L 15.95 13.02 L 16.75 20.05 L 10.98 15.95 L 3.95 16.75 L 8.05 10.98 Z" />
      {children}
    </svg>
  );
});

export default QuantUniverse;
