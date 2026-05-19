import React from 'react';

export const iconData = {
  "id": "ToroSnare",
  "name": "ToroSnare",
  "category": "RW",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.50 4.10 L 17.29 5.11 L 15.70 3.96 L 16.46 5.69 L 16.97 3.78 L 15.27 1.32 L 16.25 2.29 L 16.79 3.08 L 18.79 2.96 L 21.78 5.15 L 20.36 6.92 L 21.49 6.98 L 19.36 8.98 L 20.55 11.40 L 21.77 12.64 L 21.92 13.83 L 22.77 11.17 L 20.94 13.61 L 22.20 12.16 L 20.06 13.49 L 17.80 13.84 L 18.30 15.35 L 16.16 16.49 L 17.55 15.20 L 17.62 13.25"
      }
    ]
  ]
};

export const ToroSnare = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.50 4.10 L 17.29 5.11 L 15.70 3.96 L 16.46 5.69 L 16.97 3.78 L 15.27 1.32 L 16.25 2.29 L 16.79 3.08 L 18.79 2.96 L 21.78 5.15 L 20.36 6.92 L 21.49 6.98 L 19.36 8.98 L 20.55 11.40 L 21.77 12.64 L 21.92 13.83 L 22.77 11.17 L 20.94 13.61 L 22.20 12.16 L 20.06 13.49 L 17.80 13.84 L 18.30 15.35 L 16.16 16.49 L 17.55 15.20 L 17.62 13.25" />
      {children}
    </svg>
  );
});

export default ToroSnare;
