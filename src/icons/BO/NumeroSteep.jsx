import React from 'react';

export const iconData = {
  "id": "NumeroSteep",
  "name": "NumeroSteep",
  "category": "BO",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.48 L 2.50 8.80 L 3.00 10.00 L 3.50 10.95 L 4.00 11.56 L 4.50 11.77 L 5.00 11.56 L 5.50 10.95 L 6.00 10.00 L 6.50 8.80 L 7.00 7.48 L 7.50 6.15 L 8.00 4.95 L 8.50 4.00 L 9.00 3.39 L 9.50 3.18 L 10.00 3.39 L 10.50 4.00 L 11.00 4.95 L 11.50 6.15 L 12.00 7.48 L 12.50 8.80 L 13.00 10.00 L 13.50 10.95 L 14.00 11.56 L 14.50 11.77 L 15.00 11.56 L 15.50 10.95 L 16.00 10.00 L 16.50 8.80 L 17.00 7.48 L 17.50 6.15 L 18.00 4.95 L 18.50 4.00 L 19.00 3.39 L 19.50 3.18 L 20.00 3.39 L 20.50 4.00 L 21.00 4.95 L 21.50 6.15 L 22.00 7.48"
      }
    ]
  ]
};

export const NumeroSteep = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.48 L 2.50 8.80 L 3.00 10.00 L 3.50 10.95 L 4.00 11.56 L 4.50 11.77 L 5.00 11.56 L 5.50 10.95 L 6.00 10.00 L 6.50 8.80 L 7.00 7.48 L 7.50 6.15 L 8.00 4.95 L 8.50 4.00 L 9.00 3.39 L 9.50 3.18 L 10.00 3.39 L 10.50 4.00 L 11.00 4.95 L 11.50 6.15 L 12.00 7.48 L 12.50 8.80 L 13.00 10.00 L 13.50 10.95 L 14.00 11.56 L 14.50 11.77 L 15.00 11.56 L 15.50 10.95 L 16.00 10.00 L 16.50 8.80 L 17.00 7.48 L 17.50 6.15 L 18.00 4.95 L 18.50 4.00 L 19.00 3.39 L 19.50 3.18 L 20.00 3.39 L 20.50 4.00 L 21.00 4.95 L 21.50 6.15 L 22.00 7.48" />
      {children}
    </svg>
  );
});

export default NumeroSteep;
