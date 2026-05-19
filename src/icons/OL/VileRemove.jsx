import React from 'react';

export const iconData = {
  "id": "VileRemove",
  "name": "VileRemove",
  "category": "OL",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.23 20.40 L 3.08 14.29 L 4.65 6.45 L 11.76 2.80 L 19.04 6.07 L 21.03 13.81 L 16.21 20.18 Z"
      }
    ]
  ]
};

export const VileRemove = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.23 20.40 L 3.08 14.29 L 4.65 6.45 L 11.76 2.80 L 19.04 6.07 L 21.03 13.81 L 16.21 20.18 Z" />
      {children}
    </svg>
  );
});

export default VileRemove;
