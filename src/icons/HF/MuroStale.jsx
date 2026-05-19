import React from 'react';

export const iconData = {
  "id": "MuroStale",
  "name": "MuroStale",
  "category": "HF",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.98 3.45 L 17.74 12.50 L 16.41 21.46 L 8.70 16.72 L 1.60 11.09 L 9.57 6.78 Z"
      }
    ]
  ]
};

export const MuroStale = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.98 3.45 L 17.74 12.50 L 16.41 21.46 L 8.70 16.72 L 1.60 11.09 L 9.57 6.78 Z" />
      {children}
    </svg>
  );
});

export default MuroStale;
