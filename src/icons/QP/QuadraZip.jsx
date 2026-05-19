import React from 'react';

export const iconData = {
  "id": "QuadraZip",
  "name": "QuadraZip",
  "category": "QP",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.02 20.80 L 7.63 20.63 L 2.53 13.97 L 4.56 5.82 L 12.19 2.33 L 19.68 6.12 L 21.39 14.34 Z"
      }
    ]
  ]
};

export const QuadraZip = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.02 20.80 L 7.63 20.63 L 2.53 13.97 L 4.56 5.82 L 12.19 2.33 L 19.68 6.12 L 21.39 14.34 Z" />
      {children}
    </svg>
  );
});

export default QuadraZip;
