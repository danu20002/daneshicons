import React from 'react';

export const iconData = {
  "id": "InfraPeacock",
  "name": "InfraPeacock",
  "category": "BO",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.02 L 2.50 8.91 L 3.00 10.62 L 3.50 11.97 L 4.00 12.84 L 4.50 13.14 L 5.00 12.84 L 5.50 11.97 L 6.00 10.62 L 6.50 8.91 L 7.00 7.02 L 7.50 5.13 L 8.00 3.42 L 8.50 2.07 L 9.00 1.20 L 9.50 0.90 L 10.00 1.20 L 10.50 2.07 L 11.00 3.42 L 11.50 5.13 L 12.00 7.02 L 12.50 8.91 L 13.00 10.62 L 13.50 11.97 L 14.00 12.84 L 14.50 13.14 L 15.00 12.84 L 15.50 11.97 L 16.00 10.62 L 16.50 8.91 L 17.00 7.02 L 17.50 5.13 L 18.00 3.42 L 18.50 2.07 L 19.00 1.20 L 19.50 0.90 L 20.00 1.20 L 20.50 2.07 L 21.00 3.42 L 21.50 5.13 L 22.00 7.02"
      }
    ]
  ]
};

export const InfraPeacock = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.02 L 2.50 8.91 L 3.00 10.62 L 3.50 11.97 L 4.00 12.84 L 4.50 13.14 L 5.00 12.84 L 5.50 11.97 L 6.00 10.62 L 6.50 8.91 L 7.00 7.02 L 7.50 5.13 L 8.00 3.42 L 8.50 2.07 L 9.00 1.20 L 9.50 0.90 L 10.00 1.20 L 10.50 2.07 L 11.00 3.42 L 11.50 5.13 L 12.00 7.02 L 12.50 8.91 L 13.00 10.62 L 13.50 11.97 L 14.00 12.84 L 14.50 13.14 L 15.00 12.84 L 15.50 11.97 L 16.00 10.62 L 16.50 8.91 L 17.00 7.02 L 17.50 5.13 L 18.00 3.42 L 18.50 2.07 L 19.00 1.20 L 19.50 0.90 L 20.00 1.20 L 20.50 2.07 L 21.00 3.42 L 21.50 5.13 L 22.00 7.02" />
      {children}
    </svg>
  );
});

export default InfraPeacock;
