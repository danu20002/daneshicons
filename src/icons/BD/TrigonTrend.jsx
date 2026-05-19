import React from 'react';

export const iconData = {
  "id": "TrigonTrend",
  "name": "TrigonTrend",
  "category": "BD",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.43 6.39 L 19.57 6.39 L 19.57 17.61 L 4.43 17.61 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.43 6.39 L 9.23 1.59 L 24.38 1.59 L 19.57 6.39"
      }
    ],
    [
      "path",
      {
        "d": "M 19.57 6.39 L 24.38 1.59 L 24.38 12.80 L 19.57 17.61"
      }
    ]
  ]
};

export const TrigonTrend = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.43 6.39 L 19.57 6.39 L 19.57 17.61 L 4.43 17.61 Z" />
      <path d="M 4.43 6.39 L 9.23 1.59 L 24.38 1.59 L 19.57 6.39" />
      <path d="M 19.57 6.39 L 24.38 1.59 L 24.38 12.80 L 19.57 17.61" />
      {children}
    </svg>
  );
});

export default TrigonTrend;
