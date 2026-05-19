import React from 'react';

export const iconData = {
  "id": "FumoLoft",
  "name": "FumoLoft",
  "category": "RI",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.49 16.84 L 4.16 9.93 L 8.73 4.58 L 15.76 4.82 L 19.96 10.46 L 18.17 17.27 L 11.73 20.11 Z"
      }
    ]
  ]
};

export const FumoLoft = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.49 16.84 L 4.16 9.93 L 8.73 4.58 L 15.76 4.82 L 19.96 10.46 L 18.17 17.27 L 11.73 20.11 Z" />
      {children}
    </svg>
  );
});

export default FumoLoft;
