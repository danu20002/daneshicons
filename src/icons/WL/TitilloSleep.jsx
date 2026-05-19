import React from 'react';

export const iconData = {
  "id": "TitilloSleep",
  "name": "TitilloSleep",
  "category": "WL",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.96 3.77 L 16.54 4.49 L 20.70 10.87 L 18.31 18.09 L 11.17 20.73 L 4.65 16.80 L 3.67 9.25 Z"
      }
    ]
  ]
};

export const TitilloSleep = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.96 3.77 L 16.54 4.49 L 20.70 10.87 L 18.31 18.09 L 11.17 20.73 L 4.65 16.80 L 3.67 9.25 Z" />
      {children}
    </svg>
  );
});

export default TitilloSleep;
