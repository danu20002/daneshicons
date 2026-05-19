import React from 'react';

export const iconData = {
  "id": "LumenHero",
  "name": "LumenHero",
  "category": "MA",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.67 12.84 L 3.11 10.90 L 5.33 11.04 L 6.15 9.27 L 7.94 8.09 L 5.50 10.92 L 3.70 7.94 L 4.20 8.71 L 1.21 10.64 L 3.98 11.26 L 2.13 8.96 L 1.72 11.75 L 1.00 11.59 L 1.24 12.22 L 1.00 14.86 L 1.00 12.47"
      }
    ]
  ]
};

export const LumenHero = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.67 12.84 L 3.11 10.90 L 5.33 11.04 L 6.15 9.27 L 7.94 8.09 L 5.50 10.92 L 3.70 7.94 L 4.20 8.71 L 1.21 10.64 L 3.98 11.26 L 2.13 8.96 L 1.72 11.75 L 1.00 11.59 L 1.24 12.22 L 1.00 14.86 L 1.00 12.47" />
      {children}
    </svg>
  );
});

export default LumenHero;
