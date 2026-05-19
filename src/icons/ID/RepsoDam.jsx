import React from 'react';

export const iconData = {
  "id": "RepsoDam",
  "name": "RepsoDam",
  "category": "ID",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 6.43 L 2.50 9.10 L 3.00 10.74 L 3.50 10.74 L 4.00 9.10 L 4.50 6.43 L 5.00 3.77 L 5.50 2.12 L 6.00 2.12 L 6.50 3.77 L 7.00 6.43 L 7.50 9.10 L 8.00 10.74 L 8.50 10.74 L 9.00 9.10 L 9.50 6.43 L 10.00 3.77 L 10.50 2.12 L 11.00 2.12 L 11.50 3.77 L 12.00 6.43 L 12.50 9.10 L 13.00 10.74 L 13.50 10.74 L 14.00 9.10 L 14.50 6.43 L 15.00 3.77 L 15.50 2.12 L 16.00 2.12 L 16.50 3.77 L 17.00 6.43 L 17.50 9.10 L 18.00 10.74 L 18.50 10.74 L 19.00 9.10 L 19.50 6.43 L 20.00 3.77 L 20.50 2.12 L 21.00 2.12 L 21.50 3.77 L 22.00 6.43"
      }
    ]
  ]
};

export const RepsoDam = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 6.43 L 2.50 9.10 L 3.00 10.74 L 3.50 10.74 L 4.00 9.10 L 4.50 6.43 L 5.00 3.77 L 5.50 2.12 L 6.00 2.12 L 6.50 3.77 L 7.00 6.43 L 7.50 9.10 L 8.00 10.74 L 8.50 10.74 L 9.00 9.10 L 9.50 6.43 L 10.00 3.77 L 10.50 2.12 L 11.00 2.12 L 11.50 3.77 L 12.00 6.43 L 12.50 9.10 L 13.00 10.74 L 13.50 10.74 L 14.00 9.10 L 14.50 6.43 L 15.00 3.77 L 15.50 2.12 L 16.00 2.12 L 16.50 3.77 L 17.00 6.43 L 17.50 9.10 L 18.00 10.74 L 18.50 10.74 L 19.00 9.10 L 19.50 6.43 L 20.00 3.77 L 20.50 2.12 L 21.00 2.12 L 21.50 3.77 L 22.00 6.43" />
      {children}
    </svg>
  );
});

export default RepsoDam;
