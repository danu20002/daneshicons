import React from 'react';

export const iconData = {
  "id": "TessoZero",
  "name": "TessoZero",
  "category": "XD",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.94 3.50 L 20.48 9.00 L 19.63 16.75 L 13.04 20.93 L 5.67 18.38 L 3.06 11.03 L 7.18 4.40 Z"
      }
    ]
  ]
};

export const TessoZero = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.94 3.50 L 20.48 9.00 L 19.63 16.75 L 13.04 20.93 L 5.67 18.38 L 3.06 11.03 L 7.18 4.40 Z" />
      {children}
    </svg>
  );
});

export default TessoZero;
