import React from 'react';

export const iconData = {
  "id": "VicinoPrairie",
  "name": "VicinoPrairie",
  "category": "MG",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.29 5.13 L 14.43 4.03 L 19.75 8.94 L 19.23 16.15 L 13.26 20.23 L 6.35 18.12 L 3.69 11.40 Z"
      }
    ]
  ]
};

export const VicinoPrairie = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.29 5.13 L 14.43 4.03 L 19.75 8.94 L 19.23 16.15 L 13.26 20.23 L 6.35 18.12 L 3.69 11.40 Z" />
      {children}
    </svg>
  );
});

export default VicinoPrairie;
