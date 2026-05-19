import React from 'react';

export const iconData = {
  "id": "VerificaPursuit",
  "name": "VerificaPursuit",
  "category": "YQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.66 16.22 L 10.35 20.59 L 3.32 13.09 L 8.28 4.08 L 18.38 6.02 Z"
      }
    ]
  ]
};

export const VerificaPursuit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.66 16.22 L 10.35 20.59 L 3.32 13.09 L 8.28 4.08 L 18.38 6.02 Z" />
      {children}
    </svg>
  );
});

export default VerificaPursuit;
