import React from 'react';

export const iconData = {
  "id": "KaryoDignity",
  "name": "KaryoDignity",
  "category": "FS",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.34 14.83 L 6.82 10.74 L 4.71 5.05 L 10.50 6.89 L 14.38 2.21 L 15.68 8.15 L 21.66 9.17 L 17.18 13.26 L 19.29 18.95 L 13.50 17.11 L 9.62 21.79 L 8.32 15.85 Z"
      }
    ]
  ]
};

export const KaryoDignity = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.34 14.83 L 6.82 10.74 L 4.71 5.05 L 10.50 6.89 L 14.38 2.21 L 15.68 8.15 L 21.66 9.17 L 17.18 13.26 L 19.29 18.95 L 13.50 17.11 L 9.62 21.79 L 8.32 15.85 Z" />
      {children}
    </svg>
  );
});

export default KaryoDignity;
