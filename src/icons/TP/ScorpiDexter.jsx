import React from 'react';

export const iconData = {
  "id": "ScorpiDexter",
  "name": "ScorpiDexter",
  "category": "TP",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.87 8.23 L 15.12 12.38 L 19.70 17.80 L 13.23 14.89 L 10.83 21.56 L 10.11 14.51 L 3.13 15.77 L 8.88 11.62 L 4.30 6.20 L 10.77 9.11 L 13.17 2.44 L 13.89 9.49 Z"
      }
    ]
  ]
};

export const ScorpiDexter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.87 8.23 L 15.12 12.38 L 19.70 17.80 L 13.23 14.89 L 10.83 21.56 L 10.11 14.51 L 3.13 15.77 L 8.88 11.62 L 4.30 6.20 L 10.77 9.11 L 13.17 2.44 L 13.89 9.49 Z" />
      {children}
    </svg>
  );
});

export default ScorpiDexter;
