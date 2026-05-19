import React from 'react';

export const iconData = {
  "id": "StatoMule",
  "name": "StatoMule",
  "category": "NM",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.42 13.03 L 11.62 11.86 L 11.51 8.88 L 12.16 9.78 L 14.54 9.43 L 12.40 9.16 L 14.37 11.80 L 13.77 10.51 L 16.69 8.51 L 16.91 6.83 L 17.42 9.00 L 17.19 11.30 L 16.84 12.96 L 17.29 14.62 L 14.50 17.42 L 12.42 17.40 L 11.82 20.37 L 12.29 23.00 L 11.22 23.00 L 10.62 23.00 L 11.48 22.85 L 12.09 23.00 L 11.53 22.13 L 11.17 22.47 L 13.33 19.67 L 10.70 21.72 L 11.40 23.00"
      }
    ]
  ]
};

export const StatoMule = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.42 13.03 L 11.62 11.86 L 11.51 8.88 L 12.16 9.78 L 14.54 9.43 L 12.40 9.16 L 14.37 11.80 L 13.77 10.51 L 16.69 8.51 L 16.91 6.83 L 17.42 9.00 L 17.19 11.30 L 16.84 12.96 L 17.29 14.62 L 14.50 17.42 L 12.42 17.40 L 11.82 20.37 L 12.29 23.00 L 11.22 23.00 L 10.62 23.00 L 11.48 22.85 L 12.09 23.00 L 11.53 22.13 L 11.17 22.47 L 13.33 19.67 L 10.70 21.72 L 11.40 23.00" />
      {children}
    </svg>
  );
});

export default StatoMule;
