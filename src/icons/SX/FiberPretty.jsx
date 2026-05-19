import React from 'react';

export const iconData = {
  "id": "FiberPretty",
  "name": "FiberPretty",
  "category": "SX",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.18 21.38 L 8.87 16.49 L 3.14 15.07 L 6.76 10.41 L 6.34 4.52 L 11.90 6.52 L 17.37 4.31 L 17.18 10.21 L 20.97 14.73 L 15.30 16.37 Z"
      }
    ]
  ]
};

export const FiberPretty = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.18 21.38 L 8.87 16.49 L 3.14 15.07 L 6.76 10.41 L 6.34 4.52 L 11.90 6.52 L 17.37 4.31 L 17.18 10.21 L 20.97 14.73 L 15.30 16.37 Z" />
      {children}
    </svg>
  );
});

export default FiberPretty;
