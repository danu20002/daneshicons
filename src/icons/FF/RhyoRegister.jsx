import React from 'react';

export const iconData = {
  "id": "RhyoRegister",
  "name": "RhyoRegister",
  "category": "FF",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 6.25 L 2.50 7.43 L 3.00 8.48 L 3.50 9.33 L 4.00 9.86 L 4.50 10.05 L 5.00 9.86 L 5.50 9.33 L 6.00 8.48 L 6.50 7.43 L 7.00 6.25 L 7.50 5.08 L 8.00 4.02 L 8.50 3.18 L 9.00 2.64 L 9.50 2.45 L 10.00 2.64 L 10.50 3.18 L 11.00 4.02 L 11.50 5.08 L 12.00 6.25 L 12.50 7.43 L 13.00 8.48 L 13.50 9.33 L 14.00 9.86 L 14.50 10.05 L 15.00 9.86 L 15.50 9.33 L 16.00 8.48 L 16.50 7.43 L 17.00 6.25 L 17.50 5.08 L 18.00 4.02 L 18.50 3.18 L 19.00 2.64 L 19.50 2.45 L 20.00 2.64 L 20.50 3.18 L 21.00 4.02 L 21.50 5.08 L 22.00 6.25"
      }
    ]
  ]
};

export const RhyoRegister = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 6.25 L 2.50 7.43 L 3.00 8.48 L 3.50 9.33 L 4.00 9.86 L 4.50 10.05 L 5.00 9.86 L 5.50 9.33 L 6.00 8.48 L 6.50 7.43 L 7.00 6.25 L 7.50 5.08 L 8.00 4.02 L 8.50 3.18 L 9.00 2.64 L 9.50 2.45 L 10.00 2.64 L 10.50 3.18 L 11.00 4.02 L 11.50 5.08 L 12.00 6.25 L 12.50 7.43 L 13.00 8.48 L 13.50 9.33 L 14.00 9.86 L 14.50 10.05 L 15.00 9.86 L 15.50 9.33 L 16.00 8.48 L 16.50 7.43 L 17.00 6.25 L 17.50 5.08 L 18.00 4.02 L 18.50 3.18 L 19.00 2.64 L 19.50 2.45 L 20.00 2.64 L 20.50 3.18 L 21.00 4.02 L 21.50 5.08 L 22.00 6.25" />
      {children}
    </svg>
  );
});

export default RhyoRegister;
