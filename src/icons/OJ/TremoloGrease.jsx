import React from 'react';

export const iconData = {
  "id": "TremoloGrease",
  "name": "TremoloGrease",
  "category": "OJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.80 14.17 L 15.98 19.05 L 9.83 19.80 L 4.95 15.98 L 4.20 9.83 L 8.02 4.95 L 14.17 4.20 L 19.05 8.02 Z"
      }
    ]
  ]
};

export const TremoloGrease = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.80 14.17 L 15.98 19.05 L 9.83 19.80 L 4.95 15.98 L 4.20 9.83 L 8.02 4.95 L 14.17 4.20 L 19.05 8.02 Z" />
      {children}
    </svg>
  );
});

export default TremoloGrease;
