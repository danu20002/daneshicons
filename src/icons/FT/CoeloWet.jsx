import React from 'react';

export const iconData = {
  "id": "CoeloWet",
  "name": "CoeloWet",
  "category": "FT",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.18 2.77 L 15.03 11.70 L 17.91 20.24 L 10.75 14.77 L 1.92 13.00 L 10.23 9.53 Z"
      }
    ]
  ]
};

export const CoeloWet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.18 2.77 L 15.03 11.70 L 17.91 20.24 L 10.75 14.77 L 1.92 13.00 L 10.23 9.53 Z" />
      {children}
    </svg>
  );
});

export default CoeloWet;
