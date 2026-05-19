import React from 'react';

export const iconData = {
  "id": "TelluroDisk",
  "name": "TelluroDisk",
  "category": "TI",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.91 20.92 L 3.08 18.24 L 3.80 19.47 L 3.21 22.46 L 3.11 22.25 L 1.00 23.00 L 1.00 23.00 L 1.00 20.55 L 1.92 22.11 L 1.75 19.44 L 1.00 19.92 L 1.00 22.05 L 1.72 20.04 L 1.00 18.53 L 1.00 21.51 L 1.00 23.00 L 1.00 23.00 L 1.00 23.00 L 1.00 22.29 L 1.90 23.00 L 1.57 20.47 L 1.00 18.28 L 2.18 15.52 L 2.72 14.65 L 3.37 15.20 L 1.00 18.17 L 1.00 18.86 L 1.00 20.94 L 3.20 21.26 L 2.84 20.48 L 2.31 19.99 L 3.00 21.94"
      }
    ]
  ]
};

export const TelluroDisk = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.91 20.92 L 3.08 18.24 L 3.80 19.47 L 3.21 22.46 L 3.11 22.25 L 1.00 23.00 L 1.00 23.00 L 1.00 20.55 L 1.92 22.11 L 1.75 19.44 L 1.00 19.92 L 1.00 22.05 L 1.72 20.04 L 1.00 18.53 L 1.00 21.51 L 1.00 23.00 L 1.00 23.00 L 1.00 23.00 L 1.00 22.29 L 1.90 23.00 L 1.57 20.47 L 1.00 18.28 L 2.18 15.52 L 2.72 14.65 L 3.37 15.20 L 1.00 18.17 L 1.00 18.86 L 1.00 20.94 L 3.20 21.26 L 2.84 20.48 L 2.31 19.99 L 3.00 21.94" />
      {children}
    </svg>
  );
});

export default TelluroDisk;
