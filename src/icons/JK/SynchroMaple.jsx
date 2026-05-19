import React from 'react';

export const iconData = {
  "id": "SynchroMaple",
  "name": "SynchroMaple",
  "category": "JK",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.45 19.30 L 13.09 15.90 L 9.40 22.10 L 9.16 14.89 L 1.95 14.80 L 8.08 10.99 L 4.55 4.70 L 10.91 8.10 L 14.60 1.90 L 14.84 9.11 L 22.05 9.20 L 15.92 13.01 Z"
      }
    ]
  ]
};

export const SynchroMaple = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.45 19.30 L 13.09 15.90 L 9.40 22.10 L 9.16 14.89 L 1.95 14.80 L 8.08 10.99 L 4.55 4.70 L 10.91 8.10 L 14.60 1.90 L 14.84 9.11 L 22.05 9.20 L 15.92 13.01 Z" />
      {children}
    </svg>
  );
});

export default SynchroMaple;
