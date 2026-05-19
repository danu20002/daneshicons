import React from 'react';

export const iconData = {
  "id": "SudoroToward",
  "name": "SudoroToward",
  "category": "SC",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.85 20.01 L 8.13 20.00 L 3.33 13.97 L 5.06 6.45 L 12.01 3.11 L 18.96 6.46 L 20.66 13.99 Z"
      }
    ]
  ]
};

export const SudoroToward = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.85 20.01 L 8.13 20.00 L 3.33 13.97 L 5.06 6.45 L 12.01 3.11 L 18.96 6.46 L 20.66 13.99 Z" />
      {children}
    </svg>
  );
});

export default SudoroToward;
