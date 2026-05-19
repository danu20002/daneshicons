import React from 'react';

export const iconData = {
  "id": "SaphoHump",
  "name": "SaphoHump",
  "category": "RQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.81 L 2.50 10.43 L 3.00 12.06 L 3.50 12.06 L 4.00 10.43 L 4.50 7.81 L 5.00 5.18 L 5.50 3.55 L 6.00 3.55 L 6.50 5.18 L 7.00 7.81 L 7.50 10.43 L 8.00 12.06 L 8.50 12.06 L 9.00 10.43 L 9.50 7.81 L 10.00 5.18 L 10.50 3.55 L 11.00 3.55 L 11.50 5.18 L 12.00 7.81 L 12.50 10.43 L 13.00 12.06 L 13.50 12.06 L 14.00 10.43 L 14.50 7.81 L 15.00 5.18 L 15.50 3.55 L 16.00 3.55 L 16.50 5.18 L 17.00 7.81 L 17.50 10.43 L 18.00 12.06 L 18.50 12.06 L 19.00 10.43 L 19.50 7.81 L 20.00 5.18 L 20.50 3.55 L 21.00 3.55 L 21.50 5.18 L 22.00 7.81"
      }
    ]
  ]
};

export const SaphoHump = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.81 L 2.50 10.43 L 3.00 12.06 L 3.50 12.06 L 4.00 10.43 L 4.50 7.81 L 5.00 5.18 L 5.50 3.55 L 6.00 3.55 L 6.50 5.18 L 7.00 7.81 L 7.50 10.43 L 8.00 12.06 L 8.50 12.06 L 9.00 10.43 L 9.50 7.81 L 10.00 5.18 L 10.50 3.55 L 11.00 3.55 L 11.50 5.18 L 12.00 7.81 L 12.50 10.43 L 13.00 12.06 L 13.50 12.06 L 14.00 10.43 L 14.50 7.81 L 15.00 5.18 L 15.50 3.55 L 16.00 3.55 L 16.50 5.18 L 17.00 7.81 L 17.50 10.43 L 18.00 12.06 L 18.50 12.06 L 19.00 10.43 L 19.50 7.81 L 20.00 5.18 L 20.50 3.55 L 21.00 3.55 L 21.50 5.18 L 22.00 7.81" />
      {children}
    </svg>
  );
});

export default SaphoHump;
