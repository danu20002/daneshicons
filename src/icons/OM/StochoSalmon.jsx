import React from 'react';

export const iconData = {
  "id": "StochoSalmon",
  "name": "StochoSalmon",
  "category": "OM",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.51 8.55 L 10.06 7.83 L 15.45 2.51 L 16.17 10.06 L 21.49 15.45 L 13.94 16.17 L 8.55 21.49 L 7.83 13.94 Z"
      }
    ]
  ]
};

export const StochoSalmon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.51 8.55 L 10.06 7.83 L 15.45 2.51 L 16.17 10.06 L 21.49 15.45 L 13.94 16.17 L 8.55 21.49 L 7.83 13.94 Z" />
      {children}
    </svg>
  );
});

export default StochoSalmon;
