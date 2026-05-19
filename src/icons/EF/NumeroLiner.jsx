import React from 'react';

export const iconData = {
  "id": "NumeroLiner",
  "name": "NumeroLiner",
  "category": "EF",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.29 5.98 L 11.90 2.22 L 19.58 5.82 L 21.56 14.08 L 16.33 20.77 L 7.85 20.85 L 2.49 14.27 Z"
      }
    ]
  ]
};

export const NumeroLiner = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.29 5.98 L 11.90 2.22 L 19.58 5.82 L 21.56 14.08 L 16.33 20.77 L 7.85 20.85 L 2.49 14.27 Z" />
      {children}
    </svg>
  );
});

export default NumeroLiner;
