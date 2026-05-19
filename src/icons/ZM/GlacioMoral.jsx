import React from 'react';

export const iconData = {
  "id": "GlacioMoral",
  "name": "GlacioMoral",
  "category": "ZM",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.29 10.18 L 8.31 8.23 L 10.42 1.26 L 14.45 7.33 L 21.73 7.18 L 17.20 12.88 L 19.59 19.76 L 12.77 17.22 L 6.96 21.62 L 7.28 14.34 Z"
      }
    ]
  ]
};

export const GlacioMoral = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.29 10.18 L 8.31 8.23 L 10.42 1.26 L 14.45 7.33 L 21.73 7.18 L 17.20 12.88 L 19.59 19.76 L 12.77 17.22 L 6.96 21.62 L 7.28 14.34 Z" />
      {children}
    </svg>
  );
});

export default GlacioMoral;
