import React from 'react';

export const iconData = {
  "id": "YachtCell",
  "name": "YachtCell",
  "category": "SW",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.34 8.24 L 17.15 13.29 L 18.46 19.72 L 12.36 17.29 L 6.65 20.53 L 7.08 13.98 L 2.23 9.55 L 8.60 7.93 L 11.31 1.95 L 14.82 7.50 Z"
      }
    ]
  ]
};

export const YachtCell = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.34 8.24 L 17.15 13.29 L 18.46 19.72 L 12.36 17.29 L 6.65 20.53 L 7.08 13.98 L 2.23 9.55 L 8.60 7.93 L 11.31 1.95 L 14.82 7.50 Z" />
      {children}
    </svg>
  );
});

export default YachtCell;
