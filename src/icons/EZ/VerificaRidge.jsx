import React from 'react';

export const iconData = {
  "id": "VerificaRidge",
  "name": "VerificaRidge",
  "category": "EZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.01 5.00 L 17.18 10.18 L 21.07 13.70 L 16.17 15.58 L 15.06 20.70 L 10.99 17.40 L 5.99 19.00 L 6.82 13.82 L 2.93 10.30 L 7.83 8.42 L 8.94 3.30 L 13.01 6.60 Z"
      }
    ]
  ]
};

export const VerificaRidge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.01 5.00 L 17.18 10.18 L 21.07 13.70 L 16.17 15.58 L 15.06 20.70 L 10.99 17.40 L 5.99 19.00 L 6.82 13.82 L 2.93 10.30 L 7.83 8.42 L 8.94 3.30 L 13.01 6.60 Z" />
      {children}
    </svg>
  );
});

export default VerificaRidge;
