import React from 'react';

export const iconData = {
  "id": "RadiMulch",
  "name": "RadiMulch",
  "category": "IJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.09 13.26 L 10.97 15.68 L 13.91 12.88 L 14.48 13.18 L 16.08 15.27 L 16.51 17.50 L 14.29 20.43 L 13.80 22.32 L 11.20 19.91 L 13.16 21.99 L 12.68 21.22 L 13.26 18.45 L 10.41 18.09 L 9.68 17.08 L 11.88 16.20 L 12.45 18.77 L 11.55 18.74 L 12.85 19.16 L 10.39 20.86 L 10.77 21.87 L 7.98 21.07 L 5.19 23.00 L 2.23 21.17 L 1.70 23.00 L 1.00 22.36 L 1.00 20.38 L 1.53 21.71 L 1.69 18.91 L 1.00 20.13 L 2.85 20.85 L 2.08 19.62 L 1.35 17.98 L 1.00 19.43 L 2.43 18.43 L 1.00 19.87 L 3.19 20.91"
      }
    ]
  ]
};

export const RadiMulch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.09 13.26 L 10.97 15.68 L 13.91 12.88 L 14.48 13.18 L 16.08 15.27 L 16.51 17.50 L 14.29 20.43 L 13.80 22.32 L 11.20 19.91 L 13.16 21.99 L 12.68 21.22 L 13.26 18.45 L 10.41 18.09 L 9.68 17.08 L 11.88 16.20 L 12.45 18.77 L 11.55 18.74 L 12.85 19.16 L 10.39 20.86 L 10.77 21.87 L 7.98 21.07 L 5.19 23.00 L 2.23 21.17 L 1.70 23.00 L 1.00 22.36 L 1.00 20.38 L 1.53 21.71 L 1.69 18.91 L 1.00 20.13 L 2.85 20.85 L 2.08 19.62 L 1.35 17.98 L 1.00 19.43 L 2.43 18.43 L 1.00 19.87 L 3.19 20.91" />
      {children}
    </svg>
  );
});

export default RadiMulch;
