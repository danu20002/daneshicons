import React from 'react';

export const iconData = {
  "id": "ScaroTragedy",
  "name": "ScaroTragedy",
  "category": "TV",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 6.00 L 2.50 9.16 L 3.00 11.62 L 3.50 12.86 L 4.00 12.61 L 4.50 10.91 L 5.00 8.15 L 5.50 4.92 L 6.00 1.92 L 6.50 -0.18 L 7.00 -0.94 L 7.50 -0.18 L 8.00 1.92 L 8.50 4.92 L 9.00 8.15 L 9.50 10.91 L 10.00 12.61 L 10.50 12.86 L 11.00 11.62 L 11.50 9.16 L 12.00 6.00 L 12.50 2.85 L 13.00 0.39 L 13.50 -0.85 L 14.00 -0.60 L 14.50 1.09 L 15.00 3.86 L 15.50 7.09 L 16.00 10.08 L 16.50 12.19 L 17.00 12.95 L 17.50 12.19 L 18.00 10.08 L 18.50 7.09 L 19.00 3.86 L 19.50 1.09 L 20.00 -0.60 L 20.50 -0.85 L 21.00 0.39 L 21.50 2.85 L 22.00 6.00"
      }
    ]
  ]
};

export const ScaroTragedy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 6.00 L 2.50 9.16 L 3.00 11.62 L 3.50 12.86 L 4.00 12.61 L 4.50 10.91 L 5.00 8.15 L 5.50 4.92 L 6.00 1.92 L 6.50 -0.18 L 7.00 -0.94 L 7.50 -0.18 L 8.00 1.92 L 8.50 4.92 L 9.00 8.15 L 9.50 10.91 L 10.00 12.61 L 10.50 12.86 L 11.00 11.62 L 11.50 9.16 L 12.00 6.00 L 12.50 2.85 L 13.00 0.39 L 13.50 -0.85 L 14.00 -0.60 L 14.50 1.09 L 15.00 3.86 L 15.50 7.09 L 16.00 10.08 L 16.50 12.19 L 17.00 12.95 L 17.50 12.19 L 18.00 10.08 L 18.50 7.09 L 19.00 3.86 L 19.50 1.09 L 20.00 -0.60 L 20.50 -0.85 L 21.00 0.39 L 21.50 2.85 L 22.00 6.00" />
      {children}
    </svg>
  );
});

export default ScaroTragedy;
