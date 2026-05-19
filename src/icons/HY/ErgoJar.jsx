import React from 'react';

export const iconData = {
  "id": "ErgoJar",
  "name": "ErgoJar",
  "category": "HY",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.73 19.13 L 12.28 17.69 L 6.99 19.65 L 6.67 14.02 L 3.18 9.60 L 8.43 7.56 L 11.55 2.87 L 15.12 7.23 L 20.55 8.75 L 17.50 13.50 Z"
      }
    ]
  ]
};

export const ErgoJar = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.73 19.13 L 12.28 17.69 L 6.99 19.65 L 6.67 14.02 L 3.18 9.60 L 8.43 7.56 L 11.55 2.87 L 15.12 7.23 L 20.55 8.75 L 17.50 13.50 Z" />
      {children}
    </svg>
  );
});

export default ErgoJar;
