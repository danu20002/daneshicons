import React from 'react';

export const iconData = {
  "id": "QuatroMean",
  "name": "QuatroMean",
  "category": "BZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.74 7.08 L 11.32 3.26 L 18.41 6.02 L 20.67 13.28 L 16.41 19.58 L 8.82 20.17 L 3.63 14.61 Z"
      }
    ]
  ]
};

export const QuatroMean = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.74 7.08 L 11.32 3.26 L 18.41 6.02 L 20.67 13.28 L 16.41 19.58 L 8.82 20.17 L 3.63 14.61 Z" />
      {children}
    </svg>
  );
});

export default QuatroMean;
