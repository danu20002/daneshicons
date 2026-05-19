import React from 'react';

export const iconData = {
  "id": "VeraceNeat",
  "name": "VeraceNeat",
  "category": "VT",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.99 20.47 L 6.00 17.99 L 3.53 11.99 L 6.01 6.00 L 12.01 3.53 L 18.00 6.01 L 20.47 12.01 L 17.99 18.00 Z"
      }
    ]
  ]
};

export const VeraceNeat = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.99 20.47 L 6.00 17.99 L 3.53 11.99 L 6.01 6.00 L 12.01 3.53 L 18.00 6.01 L 20.47 12.01 L 17.99 18.00 Z" />
      {children}
    </svg>
  );
});

export default VeraceNeat;
