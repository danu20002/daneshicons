import React from 'react';

export const iconData = {
  "id": "ErgoTremble",
  "name": "ErgoTremble",
  "category": "AZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.17 12.08 4.89 8.99 Q 5.90 8.18 6.91 7.37 Q 13.24 6.45 19.57 5.53 Q 20.18 11.37 20.79 17.22 Q 15.12 16.19 9.46 15.17 Z"
      }
    ]
  ]
};

export const ErgoTremble = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.17 12.08 4.89 8.99 Q 5.90 8.18 6.91 7.37 Q 13.24 6.45 19.57 5.53 Q 20.18 11.37 20.79 17.22 Q 15.12 16.19 9.46 15.17 Z" />
      {children}
    </svg>
  );
});

export default ErgoTremble;
