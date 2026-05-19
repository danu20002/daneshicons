import React from 'react';

export const iconData = {
  "id": "TirsoEvoke",
  "name": "TirsoEvoke",
  "category": "ZE",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.19 4.82 L 18.76 6.82 L 16.15 7.63 L 18.28 8.03 L 19.98 5.62 L 22.03 5.77 L 23.00 6.74 L 21.09 7.54 L 20.89 10.22 L 20.95 7.61 L 22.56 7.26 L 19.68 9.55 L 18.07 8.86 L 19.44 10.64 L 22.35 9.92 L 23.00 10.58 L 23.00 10.35 L 20.28 13.03 L 19.16 12.83"
      }
    ]
  ]
};

export const TirsoEvoke = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.19 4.82 L 18.76 6.82 L 16.15 7.63 L 18.28 8.03 L 19.98 5.62 L 22.03 5.77 L 23.00 6.74 L 21.09 7.54 L 20.89 10.22 L 20.95 7.61 L 22.56 7.26 L 19.68 9.55 L 18.07 8.86 L 19.44 10.64 L 22.35 9.92 L 23.00 10.58 L 23.00 10.35 L 20.28 13.03 L 19.16 12.83" />
      {children}
    </svg>
  );
});

export default TirsoEvoke;
