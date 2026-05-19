import React from 'react';

export const iconData = {
  "id": "ZittinoMend",
  "name": "ZittinoMend",
  "category": "FY",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.68 L 2.50 10.72 L 3.00 13.10 L 3.50 14.30 L 4.00 14.05 L 4.50 12.42 L 5.00 9.75 L 5.50 6.63 L 6.00 3.74 L 6.50 1.70 L 7.00 0.97 L 7.50 1.70 L 8.00 3.74 L 8.50 6.63 L 9.00 9.75 L 9.50 12.42 L 10.00 14.05 L 10.50 14.30 L 11.00 13.10 L 11.50 10.72 L 12.00 7.68 L 12.50 4.63 L 13.00 2.25 L 13.50 1.05 L 14.00 1.30 L 14.50 2.94 L 15.00 5.60 L 15.50 8.73 L 16.00 11.62 L 16.50 13.65 L 17.00 14.38 L 17.50 13.65 L 18.00 11.62 L 18.50 8.73 L 19.00 5.60 L 19.50 2.94 L 20.00 1.30 L 20.50 1.05 L 21.00 2.25 L 21.50 4.63 L 22.00 7.68"
      }
    ]
  ]
};

export const ZittinoMend = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.68 L 2.50 10.72 L 3.00 13.10 L 3.50 14.30 L 4.00 14.05 L 4.50 12.42 L 5.00 9.75 L 5.50 6.63 L 6.00 3.74 L 6.50 1.70 L 7.00 0.97 L 7.50 1.70 L 8.00 3.74 L 8.50 6.63 L 9.00 9.75 L 9.50 12.42 L 10.00 14.05 L 10.50 14.30 L 11.00 13.10 L 11.50 10.72 L 12.00 7.68 L 12.50 4.63 L 13.00 2.25 L 13.50 1.05 L 14.00 1.30 L 14.50 2.94 L 15.00 5.60 L 15.50 8.73 L 16.00 11.62 L 16.50 13.65 L 17.00 14.38 L 17.50 13.65 L 18.00 11.62 L 18.50 8.73 L 19.00 5.60 L 19.50 2.94 L 20.00 1.30 L 20.50 1.05 L 21.00 2.25 L 21.50 4.63 L 22.00 7.68" />
      {children}
    </svg>
  );
});

export default ZittinoMend;
