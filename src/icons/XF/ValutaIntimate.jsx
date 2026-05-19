import React from 'react';

export const iconData = {
  "id": "ValutaIntimate",
  "name": "ValutaIntimate",
  "category": "XF",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.31 21.28 L 5.62 19.50 L 2.31 10.23 L 8.69 2.72 L 18.38 4.50 L 21.69 13.77 Z"
      }
    ]
  ]
};

export const ValutaIntimate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.31 21.28 L 5.62 19.50 L 2.31 10.23 L 8.69 2.72 L 18.38 4.50 L 21.69 13.77 Z" />
      {children}
    </svg>
  );
});

export default ValutaIntimate;
