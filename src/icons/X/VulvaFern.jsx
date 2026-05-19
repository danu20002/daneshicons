import React from 'react';

export const iconData = {
  "id": "VulvaFern",
  "name": "VulvaFern",
  "category": "X",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.85 8.80 L 17.30 12.95 L 19.20 18.07 L 13.83 17.06 L 10.35 21.27 L 8.53 16.11 L 3.15 15.20 L 6.70 11.05 L 4.80 5.93 L 10.17 6.94 L 13.65 2.73 L 15.47 7.89 Z"
      }
    ]
  ]
};

export const VulvaFern = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.85 8.80 L 17.30 12.95 L 19.20 18.07 L 13.83 17.06 L 10.35 21.27 L 8.53 16.11 L 3.15 15.20 L 6.70 11.05 L 4.80 5.93 L 10.17 6.94 L 13.65 2.73 L 15.47 7.89 Z" />
      {children}
    </svg>
  );
});

export default VulvaFern;
