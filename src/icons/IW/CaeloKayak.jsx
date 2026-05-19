import React from 'react';

export const iconData = {
  "id": "CaeloKayak",
  "name": "CaeloKayak",
  "category": "IW",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.02 L 2.50 9.56 L 3.00 11.54 L 3.50 12.54 L 4.00 12.33 L 4.50 10.97 L 5.00 8.75 L 5.50 6.15 L 6.00 3.74 L 6.50 2.04 L 7.00 1.43 L 7.50 2.04 L 8.00 3.74 L 8.50 6.15 L 9.00 8.75 L 9.50 10.97 L 10.00 12.33 L 10.50 12.54 L 11.00 11.54 L 11.50 9.56 L 12.00 7.02 L 12.50 4.48 L 13.00 2.50 L 13.50 1.50 L 14.00 1.71 L 14.50 3.07 L 15.00 5.29 L 15.50 7.89 L 16.00 10.30 L 16.50 12.00 L 17.00 12.61 L 17.50 12.00 L 18.00 10.30 L 18.50 7.89 L 19.00 5.29 L 19.50 3.07 L 20.00 1.71 L 20.50 1.50 L 21.00 2.50 L 21.50 4.48 L 22.00 7.02"
      }
    ]
  ]
};

export const CaeloKayak = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.02 L 2.50 9.56 L 3.00 11.54 L 3.50 12.54 L 4.00 12.33 L 4.50 10.97 L 5.00 8.75 L 5.50 6.15 L 6.00 3.74 L 6.50 2.04 L 7.00 1.43 L 7.50 2.04 L 8.00 3.74 L 8.50 6.15 L 9.00 8.75 L 9.50 10.97 L 10.00 12.33 L 10.50 12.54 L 11.00 11.54 L 11.50 9.56 L 12.00 7.02 L 12.50 4.48 L 13.00 2.50 L 13.50 1.50 L 14.00 1.71 L 14.50 3.07 L 15.00 5.29 L 15.50 7.89 L 16.00 10.30 L 16.50 12.00 L 17.00 12.61 L 17.50 12.00 L 18.00 10.30 L 18.50 7.89 L 19.00 5.29 L 19.50 3.07 L 20.00 1.71 L 20.50 1.50 L 21.00 2.50 L 21.50 4.48 L 22.00 7.02" />
      {children}
    </svg>
  );
});

export default CaeloKayak;
