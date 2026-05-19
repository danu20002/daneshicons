import React from 'react';

export const iconData = {
  "id": "TroncoClub",
  "name": "TroncoClub",
  "category": "LU",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.71 L 2.50 10.37 L 3.00 12.45 L 3.50 13.50 L 4.00 13.28 L 4.50 11.85 L 5.00 9.52 L 5.50 6.79 L 6.00 4.26 L 6.50 2.48 L 7.00 1.84 L 7.50 2.48 L 8.00 4.26 L 8.50 6.79 L 9.00 9.52 L 9.50 11.85 L 10.00 13.28 L 10.50 13.50 L 11.00 12.45 L 11.50 10.37 L 12.00 7.71 L 12.50 5.04 L 13.00 2.96 L 13.50 1.91 L 14.00 2.13 L 14.50 3.56 L 15.00 5.89 L 15.50 8.62 L 16.00 11.15 L 16.50 12.93 L 17.00 13.57 L 17.50 12.93 L 18.00 11.15 L 18.50 8.62 L 19.00 5.89 L 19.50 3.56 L 20.00 2.13 L 20.50 1.91 L 21.00 2.96 L 21.50 5.04 L 22.00 7.71"
      }
    ]
  ]
};

export const TroncoClub = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.71 L 2.50 10.37 L 3.00 12.45 L 3.50 13.50 L 4.00 13.28 L 4.50 11.85 L 5.00 9.52 L 5.50 6.79 L 6.00 4.26 L 6.50 2.48 L 7.00 1.84 L 7.50 2.48 L 8.00 4.26 L 8.50 6.79 L 9.00 9.52 L 9.50 11.85 L 10.00 13.28 L 10.50 13.50 L 11.00 12.45 L 11.50 10.37 L 12.00 7.71 L 12.50 5.04 L 13.00 2.96 L 13.50 1.91 L 14.00 2.13 L 14.50 3.56 L 15.00 5.89 L 15.50 8.62 L 16.00 11.15 L 16.50 12.93 L 17.00 13.57 L 17.50 12.93 L 18.00 11.15 L 18.50 8.62 L 19.00 5.89 L 19.50 3.56 L 20.00 2.13 L 20.50 1.91 L 21.00 2.96 L 21.50 5.04 L 22.00 7.71" />
      {children}
    </svg>
  );
});

export default TroncoClub;
