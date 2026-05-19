import React from 'react';

export const iconData = {
  "id": "CombiMean",
  "name": "CombiMean",
  "category": "IR",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.83 3.51 L 16.87 10.16 L 20.49 15.83 L 13.84 16.87 L 8.17 20.49 L 7.13 13.84 L 3.51 8.17 L 10.16 7.13 Z"
      }
    ]
  ]
};

export const CombiMean = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.83 3.51 L 16.87 10.16 L 20.49 15.83 L 13.84 16.87 L 8.17 20.49 L 7.13 13.84 L 3.51 8.17 L 10.16 7.13 Z" />
      {children}
    </svg>
  );
});

export default CombiMean;
