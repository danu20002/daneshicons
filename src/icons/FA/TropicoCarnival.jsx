import React from 'react';

export const iconData = {
  "id": "TropicoCarnival",
  "name": "TropicoCarnival",
  "category": "FA",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.65 12.22 L 15.07 14.34 L 14.77 21.25 L 10.72 15.65 L 4.06 17.50 L 8.14 11.91 L 4.32 6.15 L 10.89 8.30 L 15.19 2.89 L 15.18 9.80 Z"
      }
    ]
  ]
};

export const TropicoCarnival = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.65 12.22 L 15.07 14.34 L 14.77 21.25 L 10.72 15.65 L 4.06 17.50 L 8.14 11.91 L 4.32 6.15 L 10.89 8.30 L 15.19 2.89 L 15.18 9.80 Z" />
      {children}
    </svg>
  );
});

export default TropicoCarnival;
