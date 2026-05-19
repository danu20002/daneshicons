import React from 'react';

export const iconData = {
  "id": "VagaThirst",
  "name": "VagaThirst",
  "category": "GX",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.15 20.16 L 1.00 17.75 L 1.65 16.52 L 1.36 17.10 L 3.08 17.46 L 1.50 17.66 L 4.07 14.70 L 4.43 13.89 L 2.37 16.78 L 1.00 14.71 L 1.37 13.07 L 1.00 11.70 L 2.79 9.13 L 2.26 10.30 L 1.40 7.47 L 1.00 4.74 L 1.00 7.64 L 1.82 5.55 L 1.00 4.80 L 1.00 3.83 L 1.00 1.82"
      }
    ]
  ]
};

export const VagaThirst = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.15 20.16 L 1.00 17.75 L 1.65 16.52 L 1.36 17.10 L 3.08 17.46 L 1.50 17.66 L 4.07 14.70 L 4.43 13.89 L 2.37 16.78 L 1.00 14.71 L 1.37 13.07 L 1.00 11.70 L 2.79 9.13 L 2.26 10.30 L 1.40 7.47 L 1.00 4.74 L 1.00 7.64 L 1.82 5.55 L 1.00 4.80 L 1.00 3.83 L 1.00 1.82" />
      {children}
    </svg>
  );
});

export default VagaThirst;
