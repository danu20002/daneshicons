import React from 'react';

export const iconData = {
  "id": "TernoPerish",
  "name": "TernoPerish",
  "category": "PZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.86 3.09 L 17.60 9.89 L 22.28 14.82 L 15.73 16.67 L 12.49 22.65 L 8.71 16.99 L 2.02 15.76 L 6.23 10.42 L 5.34 3.67 L 11.72 6.03 Z"
      }
    ]
  ]
};

export const TernoPerish = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.86 3.09 L 17.60 9.89 L 22.28 14.82 L 15.73 16.67 L 12.49 22.65 L 8.71 16.99 L 2.02 15.76 L 6.23 10.42 L 5.34 3.67 L 11.72 6.03 Z" />
      {children}
    </svg>
  );
});

export default TernoPerish;
