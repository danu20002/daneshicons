import React from 'react';

export const iconData = {
  "id": "SpectroLetter",
  "name": "SpectroLetter",
  "category": "BO",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 8.00 L 2.50 9.79 L 3.00 11.19 L 3.50 11.90 L 4.00 11.75 L 4.50 10.79 L 5.00 9.22 L 5.50 7.38 L 6.00 5.68 L 6.50 4.48 L 7.00 4.05 L 7.50 4.48 L 8.00 5.68 L 8.50 7.38 L 9.00 9.22 L 9.50 10.79 L 10.00 11.75 L 10.50 11.90 L 11.00 11.19 L 11.50 9.79 L 12.00 8.00 L 12.50 6.21 L 13.00 4.80 L 13.50 4.10 L 14.00 4.24 L 14.50 5.21 L 15.00 6.78 L 15.50 8.62 L 16.00 10.32 L 16.50 11.52 L 17.00 11.95 L 17.50 11.52 L 18.00 10.32 L 18.50 8.62 L 19.00 6.78 L 19.50 5.21 L 20.00 4.24 L 20.50 4.10 L 21.00 4.80 L 21.50 6.21 L 22.00 8.00"
      }
    ]
  ]
};

export const SpectroLetter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 8.00 L 2.50 9.79 L 3.00 11.19 L 3.50 11.90 L 4.00 11.75 L 4.50 10.79 L 5.00 9.22 L 5.50 7.38 L 6.00 5.68 L 6.50 4.48 L 7.00 4.05 L 7.50 4.48 L 8.00 5.68 L 8.50 7.38 L 9.00 9.22 L 9.50 10.79 L 10.00 11.75 L 10.50 11.90 L 11.00 11.19 L 11.50 9.79 L 12.00 8.00 L 12.50 6.21 L 13.00 4.80 L 13.50 4.10 L 14.00 4.24 L 14.50 5.21 L 15.00 6.78 L 15.50 8.62 L 16.00 10.32 L 16.50 11.52 L 17.00 11.95 L 17.50 11.52 L 18.00 10.32 L 18.50 8.62 L 19.00 6.78 L 19.50 5.21 L 20.00 4.24 L 20.50 4.10 L 21.00 4.80 L 21.50 6.21 L 22.00 8.00" />
      {children}
    </svg>
  );
});

export default SpectroLetter;
