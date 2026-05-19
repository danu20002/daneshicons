import React from 'react';

export const iconData = {
  "id": "ZurigoGreed",
  "name": "ZurigoGreed",
  "category": "RH",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.02 21.50 L 3.90 17.81 L 3.97 6.09 L 15.14 2.54 L 21.97 12.06 Z"
      }
    ]
  ]
};

export const ZurigoGreed = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.02 21.50 L 3.90 17.81 L 3.97 6.09 L 15.14 2.54 L 21.97 12.06 Z" />
      {children}
    </svg>
  );
});

export default ZurigoGreed;
