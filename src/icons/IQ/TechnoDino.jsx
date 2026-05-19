import React from 'react';

export const iconData = {
  "id": "TechnoDino",
  "name": "TechnoDino",
  "category": "IQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.35 15.16 L 7.27 10.48 L 6.01 3.80 L 11.99 7.03 L 17.95 3.77 L 16.72 10.45 L 21.67 15.11 L 14.93 16.01 L 12.02 22.15 L 9.09 16.03 Z"
      }
    ]
  ]
};

export const TechnoDino = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.35 15.16 L 7.27 10.48 L 6.01 3.80 L 11.99 7.03 L 17.95 3.77 L 16.72 10.45 L 21.67 15.11 L 14.93 16.01 L 12.02 22.15 L 9.09 16.03 Z" />
      {children}
    </svg>
  );
});

export default TechnoDino;
