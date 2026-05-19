import React from 'react';

export const iconData = {
  "id": "VernileElf",
  "name": "VernileElf",
  "category": "TM",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.89 5.69 L 15.80 3.28 L 21.46 12.92 L 14.05 21.28 L 3.80 16.82 Z"
      }
    ]
  ]
};

export const VernileElf = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.89 5.69 L 15.80 3.28 L 21.46 12.92 L 14.05 21.28 L 3.80 16.82 Z" />
      {children}
    </svg>
  );
});

export default VernileElf;
