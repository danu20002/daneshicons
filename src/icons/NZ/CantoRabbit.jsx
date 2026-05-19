import React from 'react';

export const iconData = {
  "id": "CantoRabbit",
  "name": "CantoRabbit",
  "category": "NZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 6.86 L 2.50 7.83 L 3.00 8.71 L 3.50 9.40 L 4.00 9.84 L 4.50 10.00 L 5.00 9.84 L 5.50 9.40 L 6.00 8.71 L 6.50 7.83 L 7.00 6.86 L 7.50 5.89 L 8.00 5.02 L 8.50 4.32 L 9.00 3.88 L 9.50 3.73 L 10.00 3.88 L 10.50 4.32 L 11.00 5.02 L 11.50 5.89 L 12.00 6.86 L 12.50 7.83 L 13.00 8.71 L 13.50 9.40 L 14.00 9.84 L 14.50 10.00 L 15.00 9.84 L 15.50 9.40 L 16.00 8.71 L 16.50 7.83 L 17.00 6.86 L 17.50 5.89 L 18.00 5.02 L 18.50 4.32 L 19.00 3.88 L 19.50 3.73 L 20.00 3.88 L 20.50 4.32 L 21.00 5.02 L 21.50 5.89 L 22.00 6.86"
      }
    ]
  ]
};

export const CantoRabbit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 6.86 L 2.50 7.83 L 3.00 8.71 L 3.50 9.40 L 4.00 9.84 L 4.50 10.00 L 5.00 9.84 L 5.50 9.40 L 6.00 8.71 L 6.50 7.83 L 7.00 6.86 L 7.50 5.89 L 8.00 5.02 L 8.50 4.32 L 9.00 3.88 L 9.50 3.73 L 10.00 3.88 L 10.50 4.32 L 11.00 5.02 L 11.50 5.89 L 12.00 6.86 L 12.50 7.83 L 13.00 8.71 L 13.50 9.40 L 14.00 9.84 L 14.50 10.00 L 15.00 9.84 L 15.50 9.40 L 16.00 8.71 L 16.50 7.83 L 17.00 6.86 L 17.50 5.89 L 18.00 5.02 L 18.50 4.32 L 19.00 3.88 L 19.50 3.73 L 20.00 3.88 L 20.50 4.32 L 21.00 5.02 L 21.50 5.89 L 22.00 6.86" />
      {children}
    </svg>
  );
});

export default CantoRabbit;
