import React from 'react';

export const iconData = {
  "id": "ExtraPresent",
  "name": "ExtraPresent",
  "category": "CN",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.74 17.56 L 10.63 20.03 L 12.37 22.63 L 13.46 23.00 L 14.22 23.00 L 15.36 23.00 L 12.70 21.33 L 10.10 20.78 L 11.53 21.30 L 11.40 20.62 L 10.68 18.39 L 13.23 17.98 L 13.49 16.05 L 10.81 15.79 L 10.51 18.36 L 12.39 20.11 L 12.68 21.64 L 14.03 23.00 L 13.95 23.00"
      }
    ],
    [
      "path",
      {
        "d": "M 7.45 14.97 L 5.05 14.80 L 5.07 13.50 L 3.66 13.04 L 4.49 12.41 L 2.57 11.67 L 1.00 10.50 L 1.00 8.50 L 1.00 6.47 L 1.00 5.50 L 1.00 3.75 L 2.11 5.11 L 1.16 2.85 L 1.00 4.79 L 1.00 3.30 L 1.00 1.00 L 1.00 2.06 L 2.78 1.00 L 2.65 1.00 L 5.44 2.21"
      }
    ]
  ]
};

export const ExtraPresent = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.74 17.56 L 10.63 20.03 L 12.37 22.63 L 13.46 23.00 L 14.22 23.00 L 15.36 23.00 L 12.70 21.33 L 10.10 20.78 L 11.53 21.30 L 11.40 20.62 L 10.68 18.39 L 13.23 17.98 L 13.49 16.05 L 10.81 15.79 L 10.51 18.36 L 12.39 20.11 L 12.68 21.64 L 14.03 23.00 L 13.95 23.00" />
      <path d="M 7.45 14.97 L 5.05 14.80 L 5.07 13.50 L 3.66 13.04 L 4.49 12.41 L 2.57 11.67 L 1.00 10.50 L 1.00 8.50 L 1.00 6.47 L 1.00 5.50 L 1.00 3.75 L 2.11 5.11 L 1.16 2.85 L 1.00 4.79 L 1.00 3.30 L 1.00 1.00 L 1.00 2.06 L 2.78 1.00 L 2.65 1.00 L 5.44 2.21" />
      {children}
    </svg>
  );
});

export default ExtraPresent;
