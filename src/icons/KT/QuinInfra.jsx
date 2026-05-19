import React from 'react';

export const iconData = {
  "id": "QuinInfra",
  "name": "QuinInfra",
  "category": "KT",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.96 17.10 L 4.06 8.46 L 11.10 3.36 L 19.04 6.90 L 19.94 15.54 L 12.90 20.64 Z"
      }
    ]
  ]
};

export const QuinInfra = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.96 17.10 L 4.06 8.46 L 11.10 3.36 L 19.04 6.90 L 19.94 15.54 L 12.90 20.64 Z" />
      {children}
    </svg>
  );
});

export default QuinInfra;
