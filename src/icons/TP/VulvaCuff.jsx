import React from 'react';

export const iconData = {
  "id": "VulvaCuff",
  "name": "VulvaCuff",
  "category": "TP",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.98 18.38 L 12.20 16.49 L 5.62 18.98 L 7.51 12.20 L 5.02 5.62 L 11.80 7.51 L 18.38 5.02 L 16.49 11.80 Z"
      }
    ]
  ]
};

export const VulvaCuff = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.98 18.38 L 12.20 16.49 L 5.62 18.98 L 7.51 12.20 L 5.02 5.62 L 11.80 7.51 L 18.38 5.02 L 16.49 11.80 Z" />
      {children}
    </svg>
  );
});

export default VulvaCuff;
