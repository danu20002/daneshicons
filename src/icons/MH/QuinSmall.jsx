import React from 'react';

export const iconData = {
  "id": "QuinSmall",
  "name": "QuinSmall",
  "category": "MH",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.28 20.77 L 8.06 14.94 L 2.82 12.13 L 7.99 9.17 L 9.04 3.31 L 13.45 7.31 L 19.35 6.50 L 16.91 11.93 L 19.50 17.29 L 13.58 16.65 Z"
      }
    ]
  ]
};

export const QuinSmall = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.28 20.77 L 8.06 14.94 L 2.82 12.13 L 7.99 9.17 L 9.04 3.31 L 13.45 7.31 L 19.35 6.50 L 16.91 11.93 L 19.50 17.29 L 13.58 16.65 Z" />
      {children}
    </svg>
  );
});

export default QuinSmall;
