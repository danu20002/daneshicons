import React from 'react';

export const iconData = {
  "id": "YepYeast",
  "name": "YepYeast",
  "category": "QX",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.85 L 2.50 8.84 L 3.00 9.73 L 3.50 10.44 L 4.00 10.90 L 4.50 11.05 L 5.00 10.90 L 5.50 10.44 L 6.00 9.73 L 6.50 8.84 L 7.00 7.85 L 7.50 6.86 L 8.00 5.96 L 8.50 5.25 L 9.00 4.80 L 9.50 4.64 L 10.00 4.80 L 10.50 5.25 L 11.00 5.96 L 11.50 6.86 L 12.00 7.85 L 12.50 8.84 L 13.00 9.73 L 13.50 10.44 L 14.00 10.90 L 14.50 11.05 L 15.00 10.90 L 15.50 10.44 L 16.00 9.73 L 16.50 8.84 L 17.00 7.85 L 17.50 6.86 L 18.00 5.96 L 18.50 5.25 L 19.00 4.80 L 19.50 4.64 L 20.00 4.80 L 20.50 5.25 L 21.00 5.96 L 21.50 6.86 L 22.00 7.85"
      }
    ]
  ]
};

export const YepYeast = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.85 L 2.50 8.84 L 3.00 9.73 L 3.50 10.44 L 4.00 10.90 L 4.50 11.05 L 5.00 10.90 L 5.50 10.44 L 6.00 9.73 L 6.50 8.84 L 7.00 7.85 L 7.50 6.86 L 8.00 5.96 L 8.50 5.25 L 9.00 4.80 L 9.50 4.64 L 10.00 4.80 L 10.50 5.25 L 11.00 5.96 L 11.50 6.86 L 12.00 7.85 L 12.50 8.84 L 13.00 9.73 L 13.50 10.44 L 14.00 10.90 L 14.50 11.05 L 15.00 10.90 L 15.50 10.44 L 16.00 9.73 L 16.50 8.84 L 17.00 7.85 L 17.50 6.86 L 18.00 5.96 L 18.50 5.25 L 19.00 4.80 L 19.50 4.64 L 20.00 4.80 L 20.50 5.25 L 21.00 5.96 L 21.50 6.86 L 22.00 7.85" />
      {children}
    </svg>
  );
});

export default YepYeast;
