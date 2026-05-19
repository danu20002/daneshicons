import React from 'react';

export const iconData = {
  "id": "TyphoPlunge",
  "name": "TyphoPlunge",
  "category": "C",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.02 21.05 L 6.20 18.95 L 3.09 13.59 L 4.15 7.49 L 8.88 3.50 L 15.07 3.49 L 19.83 7.45 L 20.92 13.55 L 17.84 18.92 Z"
      }
    ]
  ]
};

export const TyphoPlunge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.02 21.05 L 6.20 18.95 L 3.09 13.59 L 4.15 7.49 L 8.88 3.50 L 15.07 3.49 L 19.83 7.45 L 20.92 13.55 L 17.84 18.92 Z" />
      {children}
    </svg>
  );
});

export default TyphoPlunge;
