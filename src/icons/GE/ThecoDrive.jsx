import React from 'react';

export const iconData = {
  "id": "ThecoDrive",
  "name": "ThecoDrive",
  "category": "GE",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.48 5.29 L 6.18 4.29 L 8.03 6.80 L 7.07 6.88 L 4.63 7.63 L 6.59 4.78 L 4.62 6.97 L 4.74 7.64 L 3.85 8.89 L 1.97 9.67 L 2.90 11.42 L 1.00 12.96 L 1.09 11.74 L 1.68 13.38 L 1.00 12.55 L 1.00 13.42 L 1.00 12.37 L 1.00 14.62 L 1.00 12.33 L 1.01 10.09 L 1.00 10.97 L 1.00 9.89 L 1.00 7.21"
      }
    ]
  ]
};

export const ThecoDrive = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.48 5.29 L 6.18 4.29 L 8.03 6.80 L 7.07 6.88 L 4.63 7.63 L 6.59 4.78 L 4.62 6.97 L 4.74 7.64 L 3.85 8.89 L 1.97 9.67 L 2.90 11.42 L 1.00 12.96 L 1.09 11.74 L 1.68 13.38 L 1.00 12.55 L 1.00 13.42 L 1.00 12.37 L 1.00 14.62 L 1.00 12.33 L 1.01 10.09 L 1.00 10.97 L 1.00 9.89 L 1.00 7.21" />
      {children}
    </svg>
  );
});

export default ThecoDrive;
