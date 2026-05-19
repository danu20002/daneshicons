import React from 'react';

export const iconData = {
  "id": "VimineMile",
  "name": "VimineMile",
  "category": "IP",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.05 17.78 L 3.02 8.00 L 10.97 2.22 L 19.95 6.22 L 20.98 16.00 L 13.03 21.78 Z"
      }
    ]
  ]
};

export const VimineMile = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.05 17.78 L 3.02 8.00 L 10.97 2.22 L 19.95 6.22 L 20.98 16.00 L 13.03 21.78 Z" />
      {children}
    </svg>
  );
});

export default VimineMile;
