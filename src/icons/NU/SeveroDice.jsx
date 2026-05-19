import React from 'react';

export const iconData = {
  "id": "SeveroDice",
  "name": "SeveroDice",
  "category": "NU",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.04 2.56 L 15.66 9.33 L 21.92 11.98 L 15.67 14.66 L 15.09 21.43 L 10.61 16.31 L 3.99 17.85 L 7.47 12.01 L 3.96 6.19 L 10.59 7.69 Z"
      }
    ]
  ]
};

export const SeveroDice = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.04 2.56 L 15.66 9.33 L 21.92 11.98 L 15.67 14.66 L 15.09 21.43 L 10.61 16.31 L 3.99 17.85 L 7.47 12.01 L 3.96 6.19 L 10.59 7.69 Z" />
      {children}
    </svg>
  );
});

export default SeveroDice;
