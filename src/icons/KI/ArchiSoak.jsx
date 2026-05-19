import React from 'react';

export const iconData = {
  "id": "ArchiSoak",
  "name": "ArchiSoak",
  "category": "KI",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.60 L 2.50 9.16 L 3.00 10.57 L 3.50 11.68 L 4.00 12.40 L 4.50 12.64 L 5.00 12.40 L 5.50 11.68 L 6.00 10.57 L 6.50 9.16 L 7.00 7.60 L 7.50 6.05 L 8.00 4.64 L 8.50 3.53 L 9.00 2.81 L 9.50 2.57 L 10.00 2.81 L 10.50 3.53 L 11.00 4.64 L 11.50 6.05 L 12.00 7.60 L 12.50 9.16 L 13.00 10.57 L 13.50 11.68 L 14.00 12.40 L 14.50 12.64 L 15.00 12.40 L 15.50 11.68 L 16.00 10.57 L 16.50 9.16 L 17.00 7.60 L 17.50 6.05 L 18.00 4.64 L 18.50 3.53 L 19.00 2.81 L 19.50 2.57 L 20.00 2.81 L 20.50 3.53 L 21.00 4.64 L 21.50 6.05 L 22.00 7.60"
      }
    ]
  ]
};

export const ArchiSoak = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.60 L 2.50 9.16 L 3.00 10.57 L 3.50 11.68 L 4.00 12.40 L 4.50 12.64 L 5.00 12.40 L 5.50 11.68 L 6.00 10.57 L 6.50 9.16 L 7.00 7.60 L 7.50 6.05 L 8.00 4.64 L 8.50 3.53 L 9.00 2.81 L 9.50 2.57 L 10.00 2.81 L 10.50 3.53 L 11.00 4.64 L 11.50 6.05 L 12.00 7.60 L 12.50 9.16 L 13.00 10.57 L 13.50 11.68 L 14.00 12.40 L 14.50 12.64 L 15.00 12.40 L 15.50 11.68 L 16.00 10.57 L 16.50 9.16 L 17.00 7.60 L 17.50 6.05 L 18.00 4.64 L 18.50 3.53 L 19.00 2.81 L 19.50 2.57 L 20.00 2.81 L 20.50 3.53 L 21.00 4.64 L 21.50 6.05 L 22.00 7.60" />
      {children}
    </svg>
  );
});

export default ArchiSoak;
