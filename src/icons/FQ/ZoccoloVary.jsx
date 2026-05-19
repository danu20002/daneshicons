import React from 'react';

export const iconData = {
  "id": "ZoccoloVary",
  "name": "ZoccoloVary",
  "category": "FQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.91 13.83 L 15.50 19.32 L 8.46 19.30 L 4.08 13.78 L 5.67 6.92 L 12.02 3.89 L 18.36 6.96 Z"
      }
    ]
  ]
};

export const ZoccoloVary = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.91 13.83 L 15.50 19.32 L 8.46 19.30 L 4.08 13.78 L 5.67 6.92 L 12.02 3.89 L 18.36 6.96 Z" />
      {children}
    </svg>
  );
});

export default ZoccoloVary;
