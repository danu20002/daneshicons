import React from 'react';

export const iconData = {
  "id": "JouleTimber",
  "name": "JouleTimber",
  "category": "WT",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 6.54 L 2.50 9.70 L 3.00 12.16 L 3.50 13.41 L 4.00 13.15 L 4.50 11.46 L 5.00 8.69 L 5.50 5.45 L 6.00 2.46 L 6.50 0.35 L 7.00 -0.41 L 7.50 0.35 L 8.00 2.46 L 8.50 5.45 L 9.00 8.69 L 9.50 11.46 L 10.00 13.15 L 10.50 13.41 L 11.00 12.16 L 11.50 9.70 L 12.00 6.54 L 12.50 3.39 L 13.00 0.92 L 13.50 -0.32 L 14.00 -0.07 L 14.50 1.63 L 15.00 4.39 L 15.50 7.63 L 16.00 10.63 L 16.50 12.73 L 17.00 13.49 L 17.50 12.73 L 18.00 10.63 L 18.50 7.63 L 19.00 4.39 L 19.50 1.63 L 20.00 -0.07 L 20.50 -0.32 L 21.00 0.92 L 21.50 3.39 L 22.00 6.54"
      }
    ]
  ]
};

export const JouleTimber = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 6.54 L 2.50 9.70 L 3.00 12.16 L 3.50 13.41 L 4.00 13.15 L 4.50 11.46 L 5.00 8.69 L 5.50 5.45 L 6.00 2.46 L 6.50 0.35 L 7.00 -0.41 L 7.50 0.35 L 8.00 2.46 L 8.50 5.45 L 9.00 8.69 L 9.50 11.46 L 10.00 13.15 L 10.50 13.41 L 11.00 12.16 L 11.50 9.70 L 12.00 6.54 L 12.50 3.39 L 13.00 0.92 L 13.50 -0.32 L 14.00 -0.07 L 14.50 1.63 L 15.00 4.39 L 15.50 7.63 L 16.00 10.63 L 16.50 12.73 L 17.00 13.49 L 17.50 12.73 L 18.00 10.63 L 18.50 7.63 L 19.00 4.39 L 19.50 1.63 L 20.00 -0.07 L 20.50 -0.32 L 21.00 0.92 L 21.50 3.39 L 22.00 6.54" />
      {children}
    </svg>
  );
});

export default JouleTimber;
