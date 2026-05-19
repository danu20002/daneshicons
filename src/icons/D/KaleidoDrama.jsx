import React from 'react';

export const iconData = {
  "id": "KaleidoDrama",
  "name": "KaleidoDrama",
  "category": "D",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.04 20.30 L 8.01 13.00 L 3.70 7.04 L 11.00 8.01 L 16.96 3.70 L 15.99 11.00 L 20.30 16.96 L 13.00 15.99 Z"
      }
    ]
  ]
};

export const KaleidoDrama = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.04 20.30 L 8.01 13.00 L 3.70 7.04 L 11.00 8.01 L 16.96 3.70 L 15.99 11.00 L 20.30 16.96 L 13.00 15.99 Z" />
      {children}
    </svg>
  );
});

export default KaleidoDrama;
