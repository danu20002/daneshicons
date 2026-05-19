import React from 'react';

export const iconData = {
  "id": "NasoEmit",
  "name": "NasoEmit",
  "category": "W",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.02 17.63 L 13.77 14.48 L 14.40 22.35 L 11.50 15.01 L 6.37 21.02 L 9.52 13.77 L 1.65 14.40 L 8.99 11.50 L 2.98 6.37 L 10.23 9.52 L 9.60 1.65 L 12.50 8.99 L 17.63 2.98 L 14.48 10.23 L 22.35 9.60 L 15.01 12.50 Z"
      }
    ]
  ]
};

export const NasoEmit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.02 17.63 L 13.77 14.48 L 14.40 22.35 L 11.50 15.01 L 6.37 21.02 L 9.52 13.77 L 1.65 14.40 L 8.99 11.50 L 2.98 6.37 L 10.23 9.52 L 9.60 1.65 L 12.50 8.99 L 17.63 2.98 L 14.48 10.23 L 22.35 9.60 L 15.01 12.50 Z" />
      {children}
    </svg>
  );
});

export default NasoEmit;
