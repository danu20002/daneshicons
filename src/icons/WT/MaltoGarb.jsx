import React from 'react';

export const iconData = {
  "id": "MaltoGarb",
  "name": "MaltoGarb",
  "category": "WT",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.33 L 2.50 11.14 L 3.00 13.49 L 3.50 13.49 L 4.00 11.14 L 4.50 7.33 L 5.00 3.52 L 5.50 1.16 L 6.00 1.16 L 6.50 3.52 L 7.00 7.33 L 7.50 11.14 L 8.00 13.49 L 8.50 13.49 L 9.00 11.14 L 9.50 7.33 L 10.00 3.52 L 10.50 1.16 L 11.00 1.16 L 11.50 3.52 L 12.00 7.33 L 12.50 11.14 L 13.00 13.49 L 13.50 13.49 L 14.00 11.14 L 14.50 7.33 L 15.00 3.52 L 15.50 1.16 L 16.00 1.16 L 16.50 3.52 L 17.00 7.33 L 17.50 11.14 L 18.00 13.49 L 18.50 13.49 L 19.00 11.14 L 19.50 7.33 L 20.00 3.52 L 20.50 1.16 L 21.00 1.16 L 21.50 3.52 L 22.00 7.33"
      }
    ]
  ]
};

export const MaltoGarb = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.33 L 2.50 11.14 L 3.00 13.49 L 3.50 13.49 L 4.00 11.14 L 4.50 7.33 L 5.00 3.52 L 5.50 1.16 L 6.00 1.16 L 6.50 3.52 L 7.00 7.33 L 7.50 11.14 L 8.00 13.49 L 8.50 13.49 L 9.00 11.14 L 9.50 7.33 L 10.00 3.52 L 10.50 1.16 L 11.00 1.16 L 11.50 3.52 L 12.00 7.33 L 12.50 11.14 L 13.00 13.49 L 13.50 13.49 L 14.00 11.14 L 14.50 7.33 L 15.00 3.52 L 15.50 1.16 L 16.00 1.16 L 16.50 3.52 L 17.00 7.33 L 17.50 11.14 L 18.00 13.49 L 18.50 13.49 L 19.00 11.14 L 19.50 7.33 L 20.00 3.52 L 20.50 1.16 L 21.00 1.16 L 21.50 3.52 L 22.00 7.33" />
      {children}
    </svg>
  );
});

export default MaltoGarb;
