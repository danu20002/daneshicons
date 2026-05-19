import React from 'react';

export const iconData = {
  "id": "OlympoDelay",
  "name": "OlympoDelay",
  "category": "EG",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.72 2.68 L 15.07 8.39 L 21.08 9.81 L 16.38 13.81 L 16.89 19.96 L 11.63 16.72 L 5.94 19.11 L 7.40 13.11 L 3.36 8.43 L 9.52 7.96 Z"
      }
    ]
  ]
};

export const OlympoDelay = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.72 2.68 L 15.07 8.39 L 21.08 9.81 L 16.38 13.81 L 16.89 19.96 L 11.63 16.72 L 5.94 19.11 L 7.40 13.11 L 3.36 8.43 L 9.52 7.96 Z" />
      {children}
    </svg>
  );
});

export default OlympoDelay;
