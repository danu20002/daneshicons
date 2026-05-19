import React from 'react';

export const iconData = {
  "id": "VorticeViscous",
  "name": "VorticeViscous",
  "category": "VN",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.21 14.84 L 12.24 15.06 L 12.20 12.49 L 9.53 14.93 L 12.11 13.77 L 14.98 14.56 L 12.32 11.76 L 14.30 11.89 L 12.82 13.67 L 15.71 13.24 L 16.03 14.84 L 18.63 16.67 L 15.95 13.78 L 13.06 16.69 L 11.24 17.68 L 8.71 17.35 L 10.55 16.53 L 9.76 19.06 L 10.53 21.45 L 12.73 23.00 L 13.32 23.00 L 13.37 21.29 L 12.03 21.81 L 11.42 22.75 L 11.26 22.29 L 10.38 19.57 L 11.32 20.59"
      }
    ]
  ]
};

export const VorticeViscous = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.21 14.84 L 12.24 15.06 L 12.20 12.49 L 9.53 14.93 L 12.11 13.77 L 14.98 14.56 L 12.32 11.76 L 14.30 11.89 L 12.82 13.67 L 15.71 13.24 L 16.03 14.84 L 18.63 16.67 L 15.95 13.78 L 13.06 16.69 L 11.24 17.68 L 8.71 17.35 L 10.55 16.53 L 9.76 19.06 L 10.53 21.45 L 12.73 23.00 L 13.32 23.00 L 13.37 21.29 L 12.03 21.81 L 11.42 22.75 L 11.26 22.29 L 10.38 19.57 L 11.32 20.59" />
      {children}
    </svg>
  );
});

export default VorticeViscous;
