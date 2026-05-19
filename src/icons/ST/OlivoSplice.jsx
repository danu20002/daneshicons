import React from 'react';

export const iconData = {
  "id": "OlivoSplice",
  "name": "OlivoSplice",
  "category": "ST",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.49 20.32 L 6.04 18.31 L 3.55 9.99 L 9.51 3.68 L 17.96 5.69 L 20.45 14.01 Z"
      }
    ]
  ]
};

export const OlivoSplice = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.49 20.32 L 6.04 18.31 L 3.55 9.99 L 9.51 3.68 L 17.96 5.69 L 20.45 14.01 Z" />
      {children}
    </svg>
  );
});

export default OlivoSplice;
