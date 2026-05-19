import React from 'react';

export const iconData = {
  "id": "ToroParent",
  "name": "ToroParent",
  "category": "BU",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.03 20.08 L 14.46 18.18 L 12.83 17.98 L 12.17 18.50 L 10.99 16.68 L 10.81 16.51 L 13.81 14.02 L 16.01 12.07 L 15.44 14.67 L 15.57 17.02 L 13.40 17.09 L 10.67 15.07 L 11.21 15.90 L 13.77 15.88 L 13.29 18.15 L 10.38 20.30 L 9.13 21.29 L 9.93 21.59 L 10.41 21.56 L 11.62 18.67 L 9.08 19.36 L 10.30 22.12 L 7.90 23.00 L 5.34 20.44 L 6.90 18.91 L 7.50 16.31 L 6.51 17.91 L 6.18 19.53 L 5.56 20.26 L 6.65 20.85 L 9.23 19.56 L 9.91 17.68"
      }
    ],
    [
      "path",
      {
        "d": "M 12.16 4.64 L 13.90 5.95 L 16.67 5.36 L 14.87 2.72 L 13.66 1.00 L 13.31 1.00 L 14.99 1.00 L 17.11 1.00 L 17.34 1.00 L 17.70 1.00 L 16.90 1.00 L 14.50 3.12 L 14.70 1.00 L 13.86 3.91 L 15.46 5.02 L 15.73 7.30 L 15.60 6.53 L 18.54 8.17 L 15.87 9.60"
      }
    ]
  ]
};

export const ToroParent = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.03 20.08 L 14.46 18.18 L 12.83 17.98 L 12.17 18.50 L 10.99 16.68 L 10.81 16.51 L 13.81 14.02 L 16.01 12.07 L 15.44 14.67 L 15.57 17.02 L 13.40 17.09 L 10.67 15.07 L 11.21 15.90 L 13.77 15.88 L 13.29 18.15 L 10.38 20.30 L 9.13 21.29 L 9.93 21.59 L 10.41 21.56 L 11.62 18.67 L 9.08 19.36 L 10.30 22.12 L 7.90 23.00 L 5.34 20.44 L 6.90 18.91 L 7.50 16.31 L 6.51 17.91 L 6.18 19.53 L 5.56 20.26 L 6.65 20.85 L 9.23 19.56 L 9.91 17.68" />
      <path d="M 12.16 4.64 L 13.90 5.95 L 16.67 5.36 L 14.87 2.72 L 13.66 1.00 L 13.31 1.00 L 14.99 1.00 L 17.11 1.00 L 17.34 1.00 L 17.70 1.00 L 16.90 1.00 L 14.50 3.12 L 14.70 1.00 L 13.86 3.91 L 15.46 5.02 L 15.73 7.30 L 15.60 6.53 L 18.54 8.17 L 15.87 9.60" />
      {children}
    </svg>
  );
});

export default ToroParent;
