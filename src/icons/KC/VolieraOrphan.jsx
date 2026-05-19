import React from 'react';

export const iconData = {
  "id": "VolieraOrphan",
  "name": "VolieraOrphan",
  "category": "KC",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.10 21.50 L 7.72 15.99 L 2.32 14.24 L 6.41 10.29 L 5.22 4.73 L 10.68 6.30 L 14.90 2.50 L 16.28 8.01 L 21.68 9.76 L 17.59 13.71 L 18.78 19.27 L 13.32 17.70 Z"
      }
    ]
  ]
};

export const VolieraOrphan = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.10 21.50 L 7.72 15.99 L 2.32 14.24 L 6.41 10.29 L 5.22 4.73 L 10.68 6.30 L 14.90 2.50 L 16.28 8.01 L 21.68 9.76 L 17.59 13.71 L 18.78 19.27 L 13.32 17.70 Z" />
      {children}
    </svg>
  );
});

export default VolieraOrphan;
