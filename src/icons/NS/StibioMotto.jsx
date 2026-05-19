import React from 'react';

export const iconData = {
  "id": "StibioMotto",
  "name": "StibioMotto",
  "category": "NS",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.00 17.75 L 8.39 19.48 L 3.77 10.87 L 10.53 3.83 L 19.32 8.07 Z"
      }
    ]
  ]
};

export const StibioMotto = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.00 17.75 L 8.39 19.48 L 3.77 10.87 L 10.53 3.83 L 19.32 8.07 Z" />
      {children}
    </svg>
  );
});

export default StibioMotto;
