import React from 'react';

export const iconData = {
  "id": "TossicoIron",
  "name": "TossicoIron",
  "category": "C",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.64 19.40 L 4.12 13.98 L 5.53 7.07 L 11.82 3.87 L 18.24 6.79 L 19.96 13.63 L 15.69 19.24 Z"
      }
    ]
  ]
};

export const TossicoIron = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.64 19.40 L 4.12 13.98 L 5.53 7.07 L 11.82 3.87 L 18.24 6.79 L 19.96 13.63 L 15.69 19.24 Z" />
      {children}
    </svg>
  );
});

export default TossicoIron;
