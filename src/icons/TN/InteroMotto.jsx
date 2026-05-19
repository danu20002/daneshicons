import React from 'react';

export const iconData = {
  "id": "InteroMotto",
  "name": "InteroMotto",
  "category": "TN",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.66 20.58 L 3.57 15.71 L 3.42 8.66 L 8.29 3.57 L 15.34 3.42 L 20.43 8.29 L 20.58 15.34 L 15.71 20.43 Z"
      }
    ]
  ]
};

export const InteroMotto = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.66 20.58 L 3.57 15.71 L 3.42 8.66 L 8.29 3.57 L 15.34 3.42 L 20.43 8.29 L 20.58 15.34 L 15.71 20.43 Z" />
      {children}
    </svg>
  );
});

export default InteroMotto;
