import React from 'react';

export const iconData = {
  "id": "SylvanoPalate",
  "name": "SylvanoPalate",
  "category": "DZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.25 4.42 L 11.78 3.78 L 12.35 6.76 L 10.52 6.46 L 12.95 4.07 L 11.24 2.40 L 11.51 5.15 L 12.75 5.04 L 15.71 2.12 L 17.92 1.13 L 19.35 1.00 L 22.18 1.00 L 23.00 1.00 L 23.00 1.00 L 20.97 2.21 L 18.57 1.00 L 17.35 2.19 L 20.01 1.00 L 22.89 2.44 L 19.96 3.13 L 21.70 2.91 L 22.67 2.98 L 20.01 5.69 L 19.52 5.32 L 22.30 2.37 L 21.19 4.82 L 22.68 5.81 L 23.00 6.97 L 23.00 6.14 L 21.77 3.56"
      }
    ]
  ]
};

export const SylvanoPalate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.25 4.42 L 11.78 3.78 L 12.35 6.76 L 10.52 6.46 L 12.95 4.07 L 11.24 2.40 L 11.51 5.15 L 12.75 5.04 L 15.71 2.12 L 17.92 1.13 L 19.35 1.00 L 22.18 1.00 L 23.00 1.00 L 23.00 1.00 L 20.97 2.21 L 18.57 1.00 L 17.35 2.19 L 20.01 1.00 L 22.89 2.44 L 19.96 3.13 L 21.70 2.91 L 22.67 2.98 L 20.01 5.69 L 19.52 5.32 L 22.30 2.37 L 21.19 4.82 L 22.68 5.81 L 23.00 6.97 L 23.00 6.14 L 21.77 3.56" />
      {children}
    </svg>
  );
});

export default SylvanoPalate;
