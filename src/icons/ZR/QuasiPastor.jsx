import React from 'react';

export const iconData = {
  "id": "QuasiPastor",
  "name": "QuasiPastor",
  "category": "ZR",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 6.85 L 2.50 8.90 L 3.00 10.51 L 3.50 11.32 L 4.00 11.15 L 4.50 10.05 L 5.00 8.25 L 5.50 6.14 L 6.00 4.19 L 6.50 2.82 L 7.00 2.32 L 7.50 2.82 L 8.00 4.19 L 8.50 6.14 L 9.00 8.25 L 9.50 10.05 L 10.00 11.15 L 10.50 11.32 L 11.00 10.51 L 11.50 8.90 L 12.00 6.85 L 12.50 4.79 L 13.00 3.19 L 13.50 2.38 L 14.00 2.54 L 14.50 3.65 L 15.00 5.45 L 15.50 7.56 L 16.00 9.51 L 16.50 10.88 L 17.00 11.37 L 17.50 10.88 L 18.00 9.51 L 18.50 7.56 L 19.00 5.45 L 19.50 3.65 L 20.00 2.54 L 20.50 2.38 L 21.00 3.19 L 21.50 4.79 L 22.00 6.85"
      }
    ]
  ]
};

export const QuasiPastor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 6.85 L 2.50 8.90 L 3.00 10.51 L 3.50 11.32 L 4.00 11.15 L 4.50 10.05 L 5.00 8.25 L 5.50 6.14 L 6.00 4.19 L 6.50 2.82 L 7.00 2.32 L 7.50 2.82 L 8.00 4.19 L 8.50 6.14 L 9.00 8.25 L 9.50 10.05 L 10.00 11.15 L 10.50 11.32 L 11.00 10.51 L 11.50 8.90 L 12.00 6.85 L 12.50 4.79 L 13.00 3.19 L 13.50 2.38 L 14.00 2.54 L 14.50 3.65 L 15.00 5.45 L 15.50 7.56 L 16.00 9.51 L 16.50 10.88 L 17.00 11.37 L 17.50 10.88 L 18.00 9.51 L 18.50 7.56 L 19.00 5.45 L 19.50 3.65 L 20.00 2.54 L 20.50 2.38 L 21.00 3.19 L 21.50 4.79 L 22.00 6.85" />
      {children}
    </svg>
  );
});

export default QuasiPastor;
