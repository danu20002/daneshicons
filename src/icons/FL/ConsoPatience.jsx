import React from 'react';

export const iconData = {
  "id": "ConsoPatience",
  "name": "ConsoPatience",
  "category": "FL",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.00 12.33 L 2.60 11.45 L 1.00 12.38 L 1.00 11.68 L 2.85 10.24 L 1.72 13.06 L 1.00 12.15 L 1.00 9.68 L 1.73 7.88 L 1.00 7.63 L 1.00 7.59 L 2.69 5.49 L 2.01 5.03 L 3.62 2.77 L 5.66 5.03 L 4.25 7.08 L 5.98 8.80 L 7.34 9.42 L 6.37 10.91 L 7.14 9.81 L 6.63 7.59 L 9.05 6.18 L 10.59 3.41 L 8.17 4.32 L 5.65 5.51 L 3.40 5.73"
      }
    ]
  ]
};

export const ConsoPatience = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.00 12.33 L 2.60 11.45 L 1.00 12.38 L 1.00 11.68 L 2.85 10.24 L 1.72 13.06 L 1.00 12.15 L 1.00 9.68 L 1.73 7.88 L 1.00 7.63 L 1.00 7.59 L 2.69 5.49 L 2.01 5.03 L 3.62 2.77 L 5.66 5.03 L 4.25 7.08 L 5.98 8.80 L 7.34 9.42 L 6.37 10.91 L 7.14 9.81 L 6.63 7.59 L 9.05 6.18 L 10.59 3.41 L 8.17 4.32 L 5.65 5.51 L 3.40 5.73" />
      {children}
    </svg>
  );
});

export default ConsoPatience;
