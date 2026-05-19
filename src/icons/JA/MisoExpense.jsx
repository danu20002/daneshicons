import React from 'react';

export const iconData = {
  "id": "MisoExpense",
  "name": "MisoExpense",
  "category": "JA",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.73 11.84 11.28 6.81 Q 11.65 8.61 12.01 10.40 Q 15.18 8.27 18.34 6.14 Q 16.96 8.76 15.58 11.38 Q 17.70 11.71 19.82 12.03 Q 18.35 14.06 16.88 16.10 Q 11.53 16.48 6.18 16.87 Z"
      }
    ]
  ]
};

export const MisoExpense = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.73 11.84 11.28 6.81 Q 11.65 8.61 12.01 10.40 Q 15.18 8.27 18.34 6.14 Q 16.96 8.76 15.58 11.38 Q 17.70 11.71 19.82 12.03 Q 18.35 14.06 16.88 16.10 Q 11.53 16.48 6.18 16.87 Z" />
      {children}
    </svg>
  );
});

export default MisoExpense;
