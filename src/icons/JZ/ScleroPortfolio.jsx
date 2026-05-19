import React from 'react';

export const iconData = {
  "id": "ScleroPortfolio",
  "name": "ScleroPortfolio",
  "category": "JZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.96 9.27 L 8.50 3.23 L 16.67 3.80 L 21.33 10.54 L 18.96 18.38 L 11.35 21.42 L 4.23 17.36 Z"
      }
    ]
  ]
};

export const ScleroPortfolio = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.96 9.27 L 8.50 3.23 L 16.67 3.80 L 21.33 10.54 L 18.96 18.38 L 11.35 21.42 L 4.23 17.36 Z" />
      {children}
    </svg>
  );
});

export default ScleroPortfolio;
