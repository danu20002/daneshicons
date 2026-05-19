import React from 'react';

export const iconData = {
  "id": "TirsoDescend",
  "name": "TirsoDescend",
  "category": "KT",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.97 7.13 L 18.78 17.12 L 9.23 20.03 L 3.50 11.84 L 9.52 3.87 Z"
      }
    ]
  ]
};

export const TirsoDescend = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.97 7.13 L 18.78 17.12 L 9.23 20.03 L 3.50 11.84 L 9.52 3.87 Z" />
      {children}
    </svg>
  );
});

export default TirsoDescend;
