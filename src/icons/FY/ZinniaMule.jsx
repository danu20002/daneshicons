import React from 'react';

export const iconData = {
  "id": "ZinniaMule",
  "name": "ZinniaMule",
  "category": "FY",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.52 L 2.50 8.64 L 3.00 9.65 L 3.50 10.45 L 4.00 10.96 L 4.50 11.14 L 5.00 10.96 L 5.50 10.45 L 6.00 9.65 L 6.50 8.64 L 7.00 7.52 L 7.50 6.40 L 8.00 5.39 L 8.50 4.59 L 9.00 4.08 L 9.50 3.90 L 10.00 4.08 L 10.50 4.59 L 11.00 5.39 L 11.50 6.40 L 12.00 7.52 L 12.50 8.64 L 13.00 9.65 L 13.50 10.45 L 14.00 10.96 L 14.50 11.14 L 15.00 10.96 L 15.50 10.45 L 16.00 9.65 L 16.50 8.64 L 17.00 7.52 L 17.50 6.40 L 18.00 5.39 L 18.50 4.59 L 19.00 4.08 L 19.50 3.90 L 20.00 4.08 L 20.50 4.59 L 21.00 5.39 L 21.50 6.40 L 22.00 7.52"
      }
    ]
  ]
};

export const ZinniaMule = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.52 L 2.50 8.64 L 3.00 9.65 L 3.50 10.45 L 4.00 10.96 L 4.50 11.14 L 5.00 10.96 L 5.50 10.45 L 6.00 9.65 L 6.50 8.64 L 7.00 7.52 L 7.50 6.40 L 8.00 5.39 L 8.50 4.59 L 9.00 4.08 L 9.50 3.90 L 10.00 4.08 L 10.50 4.59 L 11.00 5.39 L 11.50 6.40 L 12.00 7.52 L 12.50 8.64 L 13.00 9.65 L 13.50 10.45 L 14.00 10.96 L 14.50 11.14 L 15.00 10.96 L 15.50 10.45 L 16.00 9.65 L 16.50 8.64 L 17.00 7.52 L 17.50 6.40 L 18.00 5.39 L 18.50 4.59 L 19.00 4.08 L 19.50 3.90 L 20.00 4.08 L 20.50 4.59 L 21.00 5.39 L 21.50 6.40 L 22.00 7.52" />
      {children}
    </svg>
  );
});

export default ZinniaMule;
