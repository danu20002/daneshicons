import React from 'react';

export const iconData = {
  "id": "SpodoGreed",
  "name": "SpodoGreed",
  "category": "HD",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.01 18.70 L 2.33 12.64 L 4.18 6.28 L 9.69 2.59 L 16.28 3.31 L 20.86 8.09 L 21.30 14.70 L 17.39 20.05 L 10.95 21.63 Z"
      }
    ]
  ]
};

export const SpodoGreed = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.01 18.70 L 2.33 12.64 L 4.18 6.28 L 9.69 2.59 L 16.28 3.31 L 20.86 8.09 L 21.30 14.70 L 17.39 20.05 L 10.95 21.63 Z" />
      {children}
    </svg>
  );
});

export default SpodoGreed;
