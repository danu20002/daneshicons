import React from 'react';

export const iconData = {
  "id": "QuasiNut",
  "name": "QuasiNut",
  "category": "OJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.53 18.76 L 8.42 19.30 L 3.88 12.55 L 7.47 5.24 L 15.58 4.70 L 20.12 11.45 Z"
      }
    ]
  ]
};

export const QuasiNut = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.53 18.76 L 8.42 19.30 L 3.88 12.55 L 7.47 5.24 L 15.58 4.70 L 20.12 11.45 Z" />
      {children}
    </svg>
  );
});

export default QuasiNut;
