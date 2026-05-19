import React from 'react';

export const iconData = {
  "id": "IridoDime",
  "name": "IridoDime",
  "category": "SX",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.40 17.36 L 13.20 15.04 L 9.50 21.64 L 9.48 14.08 L 2.06 12.60 L 9.24 10.24 L 8.35 2.73 L 12.82 8.84 L 19.69 5.67 L 15.26 11.80 Z"
      }
    ]
  ]
};

export const IridoDime = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.40 17.36 L 13.20 15.04 L 9.50 21.64 L 9.48 14.08 L 2.06 12.60 L 9.24 10.24 L 8.35 2.73 L 12.82 8.84 L 19.69 5.67 L 15.26 11.80 Z" />
      {children}
    </svg>
  );
});

export default IridoDime;
