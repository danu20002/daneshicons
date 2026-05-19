import React from 'react';

export const iconData = {
  "id": "SpanoKelp",
  "name": "SpanoKelp",
  "category": "NR",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.85 6.50 L 19.35 16.82 L 9.69 20.48 L 3.22 12.42 L 8.89 3.78 Z"
      }
    ]
  ]
};

export const SpanoKelp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.85 6.50 L 19.35 16.82 L 9.69 20.48 L 3.22 12.42 L 8.89 3.78 Z" />
      {children}
    </svg>
  );
});

export default SpanoKelp;
