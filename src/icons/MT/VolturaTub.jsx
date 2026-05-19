import React from 'react';

export const iconData = {
  "id": "VolturaTub",
  "name": "VolturaTub",
  "category": "MT",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.74 18.52 L 15.65 20.30 L 16.22 18.98 L 15.08 17.99 L 16.22 20.14 L 14.97 18.61 L 16.53 20.93 L 15.14 18.18 L 12.98 18.99 L 10.00 16.73 L 10.61 18.94 L 9.23 21.31 L 6.83 20.20 L 7.58 22.04 L 5.12 19.74 L 4.44 22.33 L 5.43 23.00 L 2.97 22.10 L 2.01 20.99 L 1.00 22.26 L 3.23 20.91 L 4.30 22.46 L 2.48 23.00 L 1.00 21.84 L 2.29 21.88 L 2.45 22.84 L 5.00 23.00 L 7.24 22.04 L 8.54 20.78 L 7.88 22.21 L 10.78 23.00 L 9.83 21.15 L 9.21 21.42 L 8.29 23.00"
      }
    ]
  ]
};

export const VolturaTub = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.74 18.52 L 15.65 20.30 L 16.22 18.98 L 15.08 17.99 L 16.22 20.14 L 14.97 18.61 L 16.53 20.93 L 15.14 18.18 L 12.98 18.99 L 10.00 16.73 L 10.61 18.94 L 9.23 21.31 L 6.83 20.20 L 7.58 22.04 L 5.12 19.74 L 4.44 22.33 L 5.43 23.00 L 2.97 22.10 L 2.01 20.99 L 1.00 22.26 L 3.23 20.91 L 4.30 22.46 L 2.48 23.00 L 1.00 21.84 L 2.29 21.88 L 2.45 22.84 L 5.00 23.00 L 7.24 22.04 L 8.54 20.78 L 7.88 22.21 L 10.78 23.00 L 9.83 21.15 L 9.21 21.42 L 8.29 23.00" />
      {children}
    </svg>
  );
});

export default VolturaTub;
