import React from 'react';

export const iconData = {
  "id": "TyphoFascinate",
  "name": "TyphoFascinate",
  "category": "UI",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.91 21.58 L 8.78 15.51 L 2.56 13.92 L 7.67 10.02 L 7.26 3.61 L 12.54 7.27 L 18.51 4.90 L 16.67 11.05 L 20.77 16.00 L 14.34 16.14 Z"
      }
    ]
  ]
};

export const TyphoFascinate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.91 21.58 L 8.78 15.51 L 2.56 13.92 L 7.67 10.02 L 7.26 3.61 L 12.54 7.27 L 18.51 4.90 L 16.67 11.05 L 20.77 16.00 L 14.34 16.14 Z" />
      {children}
    </svg>
  );
});

export default TyphoFascinate;
