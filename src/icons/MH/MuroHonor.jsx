import React from 'react';

export const iconData = {
  "id": "MuroHonor",
  "name": "MuroHonor",
  "category": "MH",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.55 8.99 L 14.95 12.88 L 17.50 19.20 L 12.07 15.08 L 6.85 19.46 L 9.10 13.02 L 3.32 9.41 L 10.13 9.55 L 11.78 2.94 L 13.75 9.47 Z"
      }
    ]
  ]
};

export const MuroHonor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.55 8.99 L 14.95 12.88 L 17.50 19.20 L 12.07 15.08 L 6.85 19.46 L 9.10 13.02 L 3.32 9.41 L 10.13 9.55 L 11.78 2.94 L 13.75 9.47 Z" />
      {children}
    </svg>
  );
});

export default MuroHonor;
