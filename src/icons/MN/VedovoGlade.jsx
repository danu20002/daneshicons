import React from 'react';

export const iconData = {
  "id": "VedovoGlade",
  "name": "VedovoGlade",
  "category": "MN",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.77 L 2.50 9.15 L 3.00 10.23 L 3.50 10.77 L 4.00 10.66 L 4.50 9.92 L 5.00 8.71 L 5.50 7.29 L 6.00 5.98 L 6.50 5.05 L 7.00 4.72 L 7.50 5.05 L 8.00 5.98 L 8.50 7.29 L 9.00 8.71 L 9.50 9.92 L 10.00 10.66 L 10.50 10.77 L 11.00 10.23 L 11.50 9.15 L 12.00 7.77 L 12.50 6.38 L 13.00 5.30 L 13.50 4.76 L 14.00 4.87 L 14.50 5.61 L 15.00 6.83 L 15.50 8.24 L 16.00 9.56 L 16.50 10.48 L 17.00 10.81 L 17.50 10.48 L 18.00 9.56 L 18.50 8.24 L 19.00 6.83 L 19.50 5.61 L 20.00 4.87 L 20.50 4.76 L 21.00 5.30 L 21.50 6.38 L 22.00 7.77"
      }
    ]
  ]
};

export const VedovoGlade = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.77 L 2.50 9.15 L 3.00 10.23 L 3.50 10.77 L 4.00 10.66 L 4.50 9.92 L 5.00 8.71 L 5.50 7.29 L 6.00 5.98 L 6.50 5.05 L 7.00 4.72 L 7.50 5.05 L 8.00 5.98 L 8.50 7.29 L 9.00 8.71 L 9.50 9.92 L 10.00 10.66 L 10.50 10.77 L 11.00 10.23 L 11.50 9.15 L 12.00 7.77 L 12.50 6.38 L 13.00 5.30 L 13.50 4.76 L 14.00 4.87 L 14.50 5.61 L 15.00 6.83 L 15.50 8.24 L 16.00 9.56 L 16.50 10.48 L 17.00 10.81 L 17.50 10.48 L 18.00 9.56 L 18.50 8.24 L 19.00 6.83 L 19.50 5.61 L 20.00 4.87 L 20.50 4.76 L 21.00 5.30 L 21.50 6.38 L 22.00 7.77" />
      {children}
    </svg>
  );
});

export default VedovoGlade;
