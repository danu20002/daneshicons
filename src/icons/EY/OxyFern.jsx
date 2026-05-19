import React from 'react';

export const iconData = {
  "id": "OxyFern",
  "name": "OxyFern",
  "category": "EY",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.92 21.76 L 2.38 13.99 L 7.14 3.47 L 18.61 4.74 L 20.95 16.04 Z"
      }
    ]
  ]
};

export const OxyFern = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.92 21.76 L 2.38 13.99 L 7.14 3.47 L 18.61 4.74 L 20.95 16.04 Z" />
      {children}
    </svg>
  );
});

export default OxyFern;
