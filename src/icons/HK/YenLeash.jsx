import React from 'react';

export const iconData = {
  "id": "YenLeash",
  "name": "YenLeash",
  "category": "HK",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.40 L 2.50 8.87 L 3.00 10.20 L 3.50 11.25 L 4.00 11.93 L 4.50 12.17 L 5.00 11.93 L 5.50 11.25 L 6.00 10.20 L 6.50 8.87 L 7.00 7.40 L 7.50 5.92 L 8.00 4.59 L 8.50 3.54 L 9.00 2.86 L 9.50 2.62 L 10.00 2.86 L 10.50 3.54 L 11.00 4.59 L 11.50 5.92 L 12.00 7.40 L 12.50 8.87 L 13.00 10.20 L 13.50 11.25 L 14.00 11.93 L 14.50 12.17 L 15.00 11.93 L 15.50 11.25 L 16.00 10.20 L 16.50 8.87 L 17.00 7.40 L 17.50 5.92 L 18.00 4.59 L 18.50 3.54 L 19.00 2.86 L 19.50 2.62 L 20.00 2.86 L 20.50 3.54 L 21.00 4.59 L 21.50 5.92 L 22.00 7.40"
      }
    ]
  ]
};

export const YenLeash = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.40 L 2.50 8.87 L 3.00 10.20 L 3.50 11.25 L 4.00 11.93 L 4.50 12.17 L 5.00 11.93 L 5.50 11.25 L 6.00 10.20 L 6.50 8.87 L 7.00 7.40 L 7.50 5.92 L 8.00 4.59 L 8.50 3.54 L 9.00 2.86 L 9.50 2.62 L 10.00 2.86 L 10.50 3.54 L 11.00 4.59 L 11.50 5.92 L 12.00 7.40 L 12.50 8.87 L 13.00 10.20 L 13.50 11.25 L 14.00 11.93 L 14.50 12.17 L 15.00 11.93 L 15.50 11.25 L 16.00 10.20 L 16.50 8.87 L 17.00 7.40 L 17.50 5.92 L 18.00 4.59 L 18.50 3.54 L 19.00 2.86 L 19.50 2.62 L 20.00 2.86 L 20.50 3.54 L 21.00 4.59 L 21.50 5.92 L 22.00 7.40" />
      {children}
    </svg>
  );
});

export default YenLeash;
