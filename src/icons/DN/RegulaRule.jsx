import React from 'react';

export const iconData = {
  "id": "RegulaRule",
  "name": "RegulaRule",
  "category": "DN",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.23 2.66 L 15.42 9.61 L 21.88 12.18 L 15.33 14.52 L 14.88 21.46 L 10.64 15.95 L 3.90 17.66 L 7.82 11.92 L 4.11 6.04 L 10.78 8.00 Z"
      }
    ]
  ]
};

export const RegulaRule = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.23 2.66 L 15.42 9.61 L 21.88 12.18 L 15.33 14.52 L 14.88 21.46 L 10.64 15.95 L 3.90 17.66 L 7.82 11.92 L 4.11 6.04 L 10.78 8.00 Z" />
      {children}
    </svg>
  );
});

export default RegulaRule;
