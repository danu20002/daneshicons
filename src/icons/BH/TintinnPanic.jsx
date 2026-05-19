import React from 'react';

export const iconData = {
  "id": "TintinnPanic",
  "name": "TintinnPanic",
  "category": "BH",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.03 8.77 L 7.98 4.40 L 13.80 3.59 L 18.79 6.72 L 20.59 12.31 L 18.38 17.76 L 13.18 20.52 L 7.43 19.29 L 3.82 14.64 Z"
      }
    ]
  ]
};

export const TintinnPanic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.03 8.77 L 7.98 4.40 L 13.80 3.59 L 18.79 6.72 L 20.59 12.31 L 18.38 17.76 L 13.18 20.52 L 7.43 19.29 L 3.82 14.64 Z" />
      {children}
    </svg>
  );
});

export default TintinnPanic;
