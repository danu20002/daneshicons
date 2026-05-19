import React from 'react';

export const iconData = {
  "id": "VerdeStatue",
  "name": "VerdeStatue",
  "category": "E",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.08 10.12 L 16.30 13.42 L 18.17 18.92 L 12.92 16.43 L 9.09 20.80 L 8.62 15.01 L 2.92 13.88 L 7.70 10.58 L 5.83 5.08 L 11.08 7.57 L 14.91 3.20 L 15.38 8.99 Z"
      }
    ]
  ]
};

export const VerdeStatue = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.08 10.12 L 16.30 13.42 L 18.17 18.92 L 12.92 16.43 L 9.09 20.80 L 8.62 15.01 L 2.92 13.88 L 7.70 10.58 L 5.83 5.08 L 11.08 7.57 L 14.91 3.20 L 15.38 8.99 Z" />
      {children}
    </svg>
  );
});

export default VerdeStatue;
