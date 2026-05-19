import React from 'react';

export const iconData = {
  "id": "VesuvioTaxi",
  "name": "VesuvioTaxi",
  "category": "SP",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.62 15.06 L 1.33 17.28 L 3.86 15.57 L 1.31 16.06 L 1.00 18.35 L 3.18 18.27 L 5.36 21.22 L 5.49 21.48 L 2.65 23.00 L 1.00 23.00 L 1.00 23.00 L 1.00 23.00 L 1.00 23.00 L 1.00 23.00 L 1.00 20.76 L 3.56 19.62 L 5.35 19.74 L 2.52 21.62 L 5.21 22.56 L 6.99 22.66 L 9.11 23.00 L 11.57 23.00 L 13.56 23.00 L 14.07 23.00 L 11.51 23.00 L 12.16 23.00 L 13.32 22.76 L 15.22 21.01 L 17.30 19.30 L 17.58 21.56 L 14.61 19.24 L 15.44 19.50 L 15.77 22.39"
      }
    ]
  ]
};

export const VesuvioTaxi = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.62 15.06 L 1.33 17.28 L 3.86 15.57 L 1.31 16.06 L 1.00 18.35 L 3.18 18.27 L 5.36 21.22 L 5.49 21.48 L 2.65 23.00 L 1.00 23.00 L 1.00 23.00 L 1.00 23.00 L 1.00 23.00 L 1.00 23.00 L 1.00 20.76 L 3.56 19.62 L 5.35 19.74 L 2.52 21.62 L 5.21 22.56 L 6.99 22.66 L 9.11 23.00 L 11.57 23.00 L 13.56 23.00 L 14.07 23.00 L 11.51 23.00 L 12.16 23.00 L 13.32 22.76 L 15.22 21.01 L 17.30 19.30 L 17.58 21.56 L 14.61 19.24 L 15.44 19.50 L 15.77 22.39" />
      {children}
    </svg>
  );
});

export default VesuvioTaxi;
