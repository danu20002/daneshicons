import React from 'react';

export const iconData = {
  "id": "PlenoWander",
  "name": "PlenoWander",
  "category": "TQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.76 12.45 L 9.14 7.56 L 16.22 3.77 L 17.28 11.74 L 17.01 19.77 L 9.59 16.70 Z"
      }
    ]
  ]
};

export const PlenoWander = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.76 12.45 L 9.14 7.56 L 16.22 3.77 L 17.28 11.74 L 17.01 19.77 L 9.59 16.70 Z" />
      {children}
    </svg>
  );
});

export default PlenoWander;
