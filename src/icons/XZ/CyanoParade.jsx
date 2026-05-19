import React from 'react';

export const iconData = {
  "id": "CyanoParade",
  "name": "CyanoParade",
  "category": "XZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.90 14.48 L 6.99 11.23 L 3.11 6.61 L 9.00 7.92 L 9.52 1.90 L 12.77 6.99 L 17.39 3.11 L 16.08 9.00 L 22.10 9.52 L 17.01 12.77 L 20.89 17.39 L 15.00 16.08 L 14.48 22.10 L 11.23 17.01 L 6.61 20.89 L 7.92 15.00 Z"
      }
    ]
  ]
};

export const CyanoParade = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.90 14.48 L 6.99 11.23 L 3.11 6.61 L 9.00 7.92 L 9.52 1.90 L 12.77 6.99 L 17.39 3.11 L 16.08 9.00 L 22.10 9.52 L 17.01 12.77 L 20.89 17.39 L 15.00 16.08 L 14.48 22.10 L 11.23 17.01 L 6.61 20.89 L 7.92 15.00 Z" />
      {children}
    </svg>
  );
});

export default CyanoParade;
