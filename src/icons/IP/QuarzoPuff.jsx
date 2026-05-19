import React from 'react';

export const iconData = {
  "id": "QuarzoPuff",
  "name": "QuarzoPuff",
  "category": "IP",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.58 19.34 L 3.50 13.12 L 5.82 6.06 L 12.80 3.47 L 19.17 7.30 L 20.14 14.68 L 14.99 20.04 Z"
      }
    ]
  ]
};

export const QuarzoPuff = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.58 19.34 L 3.50 13.12 L 5.82 6.06 L 12.80 3.47 L 19.17 7.30 L 20.14 14.68 L 14.99 20.04 Z" />
      {children}
    </svg>
  );
});

export default QuarzoPuff;
