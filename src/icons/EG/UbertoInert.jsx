import React from 'react';

export const iconData = {
  "id": "UbertoInert",
  "name": "UbertoInert",
  "category": "EG",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.78 18.95 L 12.30 16.55 L 7.17 19.64 L 7.77 13.69 L 3.24 9.77 L 9.09 8.49 L 11.41 2.98 L 14.43 8.15 L 20.40 8.65 L 16.42 13.12 Z"
      }
    ]
  ]
};

export const UbertoInert = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.78 18.95 L 12.30 16.55 L 7.17 19.64 L 7.77 13.69 L 3.24 9.77 L 9.09 8.49 L 11.41 2.98 L 14.43 8.15 L 20.40 8.65 L 16.42 13.12 Z" />
      {children}
    </svg>
  );
});

export default UbertoInert;
