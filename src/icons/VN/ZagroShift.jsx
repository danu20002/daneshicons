import React from 'react';

export const iconData = {
  "id": "ZagroShift",
  "name": "ZagroShift",
  "category": "VN",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.42 17.00 L 12.55 19.34 L 11.87 20.95 L 11.02 18.05 L 10.44 20.47 L 11.62 21.86 L 10.06 23.00 L 8.78 23.00 L 9.77 23.00 L 7.45 22.02 L 10.31 19.53 L 11.25 18.49 L 13.24 19.41 L 15.00 19.67 L 16.86 22.10 L 18.48 20.60 L 20.27 20.96 L 22.22 21.06 L 23.00 18.45 L 23.00 15.66 L 23.00 17.24 L 20.77 15.67 L 21.74 15.35 L 22.42 18.02 L 23.00 17.39 L 23.00 19.80 L 20.89 19.36 L 18.27 19.82 L 18.40 20.23 L 19.05 20.09 L 19.48 22.69 L 19.20 23.00 L 18.27 22.38 L 17.36 20.66"
      }
    ]
  ]
};

export const ZagroShift = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.42 17.00 L 12.55 19.34 L 11.87 20.95 L 11.02 18.05 L 10.44 20.47 L 11.62 21.86 L 10.06 23.00 L 8.78 23.00 L 9.77 23.00 L 7.45 22.02 L 10.31 19.53 L 11.25 18.49 L 13.24 19.41 L 15.00 19.67 L 16.86 22.10 L 18.48 20.60 L 20.27 20.96 L 22.22 21.06 L 23.00 18.45 L 23.00 15.66 L 23.00 17.24 L 20.77 15.67 L 21.74 15.35 L 22.42 18.02 L 23.00 17.39 L 23.00 19.80 L 20.89 19.36 L 18.27 19.82 L 18.40 20.23 L 19.05 20.09 L 19.48 22.69 L 19.20 23.00 L 18.27 22.38 L 17.36 20.66" />
      {children}
    </svg>
  );
});

export default ZagroShift;
