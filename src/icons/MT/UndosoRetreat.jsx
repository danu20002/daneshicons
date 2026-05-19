import React from 'react';

export const iconData = {
  "id": "UndosoRetreat",
  "name": "UndosoRetreat",
  "category": "MT",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.21 7.21 L 18.77 7.75 L 21.75 6.60 L 20.25 8.30 L 19.30 9.82 L 20.43 9.99 L 20.11 8.91 L 17.24 10.95 L 18.05 8.65 L 16.93 11.47 L 17.40 12.77 L 17.80 14.28 L 18.23 14.34 L 18.94 16.50 L 20.44 17.68 L 19.34 19.80 L 16.40 18.34 L 17.76 19.51 L 16.82 19.66 L 15.89 21.53 L 16.55 23.00 L 15.45 23.00 L 18.14 23.00 L 17.89 23.00 L 20.17 20.64 L 20.30 21.70 L 19.78 21.65 L 19.73 23.00 L 18.00 21.71 L 15.74 23.00 L 16.47 22.90"
      }
    ]
  ]
};

export const UndosoRetreat = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.21 7.21 L 18.77 7.75 L 21.75 6.60 L 20.25 8.30 L 19.30 9.82 L 20.43 9.99 L 20.11 8.91 L 17.24 10.95 L 18.05 8.65 L 16.93 11.47 L 17.40 12.77 L 17.80 14.28 L 18.23 14.34 L 18.94 16.50 L 20.44 17.68 L 19.34 19.80 L 16.40 18.34 L 17.76 19.51 L 16.82 19.66 L 15.89 21.53 L 16.55 23.00 L 15.45 23.00 L 18.14 23.00 L 17.89 23.00 L 20.17 20.64 L 20.30 21.70 L 19.78 21.65 L 19.73 23.00 L 18.00 21.71 L 15.74 23.00 L 16.47 22.90" />
      {children}
    </svg>
  );
});

export default UndosoRetreat;
