import React from 'react';

export const iconData = {
  "id": "QuadraPursuit",
  "name": "QuadraPursuit",
  "category": "XE",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.60 21.36 L 5.68 19.09 L 2.52 11.48 L 6.50 4.26 L 14.62 2.87 L 20.77 8.36 L 20.32 16.59 Z"
      }
    ]
  ]
};

export const QuadraPursuit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.60 21.36 L 5.68 19.09 L 2.52 11.48 L 6.50 4.26 L 14.62 2.87 L 20.77 8.36 L 20.32 16.59 Z" />
      {children}
    </svg>
  );
});

export default QuadraPursuit;
