import React from 'react';

export const iconData = {
  "id": "VeronicaRefer",
  "name": "VeronicaRefer",
  "category": "RD",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.27 20.52 L 2.44 20.81 L 5.39 22.64 L 4.50 23.00 L 4.85 23.00 L 3.60 22.21 L 1.00 23.00 L 1.00 20.02 L 1.06 20.71 L 1.00 22.01 L 3.47 20.32 L 1.82 18.62 L 2.81 16.94 L 3.45 18.32 L 1.00 16.47 L 1.00 16.74 L 1.00 15.53 L 1.00 17.56 L 1.36 15.47 L 1.00 17.13 L 1.00 19.39 L 3.56 20.74 L 5.65 18.93 L 3.35 19.40 L 1.60 17.79 L 4.48 17.78 L 2.09 17.14 L 4.07 18.79"
      }
    ]
  ]
};

export const VeronicaRefer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.27 20.52 L 2.44 20.81 L 5.39 22.64 L 4.50 23.00 L 4.85 23.00 L 3.60 22.21 L 1.00 23.00 L 1.00 20.02 L 1.06 20.71 L 1.00 22.01 L 3.47 20.32 L 1.82 18.62 L 2.81 16.94 L 3.45 18.32 L 1.00 16.47 L 1.00 16.74 L 1.00 15.53 L 1.00 17.56 L 1.36 15.47 L 1.00 17.13 L 1.00 19.39 L 3.56 20.74 L 5.65 18.93 L 3.35 19.40 L 1.60 17.79 L 4.48 17.78 L 2.09 17.14 L 4.07 18.79" />
      {children}
    </svg>
  );
});

export default VeronicaRefer;
