import React from 'react';

export const iconData = {
  "id": "MirageWeb",
  "name": "MirageWeb",
  "category": "FF",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 6.20 L 2.50 8.07 L 3.00 9.76 L 3.50 11.10 L 4.00 11.96 L 4.50 12.26 L 5.00 11.96 L 5.50 11.10 L 6.00 9.76 L 6.50 8.07 L 7.00 6.20 L 7.50 4.33 L 8.00 2.64 L 8.50 1.30 L 9.00 0.43 L 9.50 0.14 L 10.00 0.43 L 10.50 1.30 L 11.00 2.64 L 11.50 4.33 L 12.00 6.20 L 12.50 8.07 L 13.00 9.76 L 13.50 11.10 L 14.00 11.96 L 14.50 12.26 L 15.00 11.96 L 15.50 11.10 L 16.00 9.76 L 16.50 8.07 L 17.00 6.20 L 17.50 4.33 L 18.00 2.64 L 18.50 1.30 L 19.00 0.43 L 19.50 0.14 L 20.00 0.43 L 20.50 1.30 L 21.00 2.64 L 21.50 4.33 L 22.00 6.20"
      }
    ]
  ]
};

export const MirageWeb = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 6.20 L 2.50 8.07 L 3.00 9.76 L 3.50 11.10 L 4.00 11.96 L 4.50 12.26 L 5.00 11.96 L 5.50 11.10 L 6.00 9.76 L 6.50 8.07 L 7.00 6.20 L 7.50 4.33 L 8.00 2.64 L 8.50 1.30 L 9.00 0.43 L 9.50 0.14 L 10.00 0.43 L 10.50 1.30 L 11.00 2.64 L 11.50 4.33 L 12.00 6.20 L 12.50 8.07 L 13.00 9.76 L 13.50 11.10 L 14.00 11.96 L 14.50 12.26 L 15.00 11.96 L 15.50 11.10 L 16.00 9.76 L 16.50 8.07 L 17.00 6.20 L 17.50 4.33 L 18.00 2.64 L 18.50 1.30 L 19.00 0.43 L 19.50 0.14 L 20.00 0.43 L 20.50 1.30 L 21.00 2.64 L 21.50 4.33 L 22.00 6.20" />
      {children}
    </svg>
  );
});

export default MirageWeb;
