import React from 'react';

export const iconData = {
  "id": "PaliLiteral",
  "name": "PaliLiteral",
  "category": "XY",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.18 20.06 L 3.60 15.00 L 3.94 8.18 L 9.00 3.60 L 15.82 3.94 L 20.40 9.00 L 20.06 15.82 L 15.00 20.40 Z"
      }
    ]
  ]
};

export const PaliLiteral = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.18 20.06 L 3.60 15.00 L 3.94 8.18 L 9.00 3.60 L 15.82 3.94 L 20.40 9.00 L 20.06 15.82 L 15.00 20.40 Z" />
      {children}
    </svg>
  );
});

export default PaliLiteral;
