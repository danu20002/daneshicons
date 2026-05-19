import React from 'react';

export const iconData = {
  "id": "FumoMimic",
  "name": "FumoMimic",
  "category": "AP",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.43 14.26 L 7.91 10.77 L 5.26 4.84 L 11.02 7.85 L 14.83 2.58 L 15.11 9.07 L 21.57 9.74 L 16.09 13.23 L 18.74 19.16 L 12.98 16.15 L 9.17 21.42 L 8.89 14.93 Z"
      }
    ]
  ]
};

export const FumoMimic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.43 14.26 L 7.91 10.77 L 5.26 4.84 L 11.02 7.85 L 14.83 2.58 L 15.11 9.07 L 21.57 9.74 L 16.09 13.23 L 18.74 19.16 L 12.98 16.15 L 9.17 21.42 L 8.89 14.93 Z" />
      {children}
    </svg>
  );
});

export default FumoMimic;
