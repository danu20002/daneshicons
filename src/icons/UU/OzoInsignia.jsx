import React from 'react';

export const iconData = {
  "id": "OzoInsignia",
  "name": "OzoInsignia",
  "category": "UU",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.46 10.65 L 17.57 7.90 L 19.49 5.34 L 20.26 5.75 L 22.15 7.93 L 23.00 5.57 L 23.00 8.07 L 23.00 10.14 L 23.00 12.95 L 23.00 15.94 L 23.00 17.59 L 22.04 19.95 L 23.00 21.45 L 22.67 21.40 L 23.00 19.58 L 23.00 17.89 L 22.71 15.27 L 20.52 14.41 L 17.80 11.89 L 17.47 9.27 L 18.63 7.55 L 18.32 9.42 L 17.74 7.82 L 19.92 5.27 L 20.23 5.16 L 18.27 3.37 L 20.25 1.16 L 19.24 1.00 L 16.88 1.43 L 17.14 1.00 L 15.97 1.00 L 13.81 1.00 L 16.07 1.00 L 17.23 2.32"
      }
    ]
  ]
};

export const OzoInsignia = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.46 10.65 L 17.57 7.90 L 19.49 5.34 L 20.26 5.75 L 22.15 7.93 L 23.00 5.57 L 23.00 8.07 L 23.00 10.14 L 23.00 12.95 L 23.00 15.94 L 23.00 17.59 L 22.04 19.95 L 23.00 21.45 L 22.67 21.40 L 23.00 19.58 L 23.00 17.89 L 22.71 15.27 L 20.52 14.41 L 17.80 11.89 L 17.47 9.27 L 18.63 7.55 L 18.32 9.42 L 17.74 7.82 L 19.92 5.27 L 20.23 5.16 L 18.27 3.37 L 20.25 1.16 L 19.24 1.00 L 16.88 1.43 L 17.14 1.00 L 15.97 1.00 L 13.81 1.00 L 16.07 1.00 L 17.23 2.32" />
      {children}
    </svg>
  );
});

export default OzoInsignia;
