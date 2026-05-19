import React from 'react';

export const iconData = {
  "id": "TaxoOctober",
  "name": "TaxoOctober",
  "category": "YT",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 15.55 L 7.57 9.89 L 8.45 2.00 L 14.11 7.57 L 22.00 8.45 L 16.43 14.11 L 15.55 22.00 L 9.89 16.43 Z"
      }
    ]
  ]
};

export const TaxoOctober = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 15.55 L 7.57 9.89 L 8.45 2.00 L 14.11 7.57 L 22.00 8.45 L 16.43 14.11 L 15.55 22.00 L 9.89 16.43 Z" />
      {children}
    </svg>
  );
});

export default TaxoOctober;
