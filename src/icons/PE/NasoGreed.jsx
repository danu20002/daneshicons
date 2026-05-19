import React from 'react';

export const iconData = {
  "id": "NasoGreed",
  "name": "NasoGreed",
  "category": "PE",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.00 4.28 L 21.69 13.34 L 15.69 21.06 L 6.00 19.72 L 2.31 10.66 L 8.31 2.94 Z"
      }
    ]
  ]
};

export const NasoGreed = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.00 4.28 L 21.69 13.34 L 15.69 21.06 L 6.00 19.72 L 2.31 10.66 L 8.31 2.94 Z" />
      {children}
    </svg>
  );
});

export default NasoGreed;
