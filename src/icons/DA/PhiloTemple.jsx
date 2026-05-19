import React from 'react';

export const iconData = {
  "id": "PhiloTemple",
  "name": "PhiloTemple",
  "category": "DA",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 6.78 L 2.50 8.66 L 3.00 10.14 L 3.50 10.88 L 4.00 10.73 L 4.50 9.71 L 5.00 8.06 L 5.50 6.13 L 6.00 4.34 L 6.50 3.08 L 7.00 2.63 L 7.50 3.08 L 8.00 4.34 L 8.50 6.13 L 9.00 8.06 L 9.50 9.71 L 10.00 10.73 L 10.50 10.88 L 11.00 10.14 L 11.50 8.66 L 12.00 6.78 L 12.50 4.89 L 13.00 3.42 L 13.50 2.68 L 14.00 2.83 L 14.50 3.84 L 15.00 5.49 L 15.50 7.43 L 16.00 9.22 L 16.50 10.48 L 17.00 10.93 L 17.50 10.48 L 18.00 9.22 L 18.50 7.43 L 19.00 5.49 L 19.50 3.84 L 20.00 2.83 L 20.50 2.68 L 21.00 3.42 L 21.50 4.89 L 22.00 6.78"
      }
    ]
  ]
};

export const PhiloTemple = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 6.78 L 2.50 8.66 L 3.00 10.14 L 3.50 10.88 L 4.00 10.73 L 4.50 9.71 L 5.00 8.06 L 5.50 6.13 L 6.00 4.34 L 6.50 3.08 L 7.00 2.63 L 7.50 3.08 L 8.00 4.34 L 8.50 6.13 L 9.00 8.06 L 9.50 9.71 L 10.00 10.73 L 10.50 10.88 L 11.00 10.14 L 11.50 8.66 L 12.00 6.78 L 12.50 4.89 L 13.00 3.42 L 13.50 2.68 L 14.00 2.83 L 14.50 3.84 L 15.00 5.49 L 15.50 7.43 L 16.00 9.22 L 16.50 10.48 L 17.00 10.93 L 17.50 10.48 L 18.00 9.22 L 18.50 7.43 L 19.00 5.49 L 19.50 3.84 L 20.00 2.83 L 20.50 2.68 L 21.00 3.42 L 21.50 4.89 L 22.00 6.78" />
      {children}
    </svg>
  );
});

export default PhiloTemple;
