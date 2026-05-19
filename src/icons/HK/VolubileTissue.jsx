import React from 'react';

export const iconData = {
  "id": "VolubileTissue",
  "name": "VolubileTissue",
  "category": "HK",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 6.54 L 2.50 9.48 L 3.00 11.79 L 3.50 12.95 L 4.00 12.71 L 4.50 11.13 L 5.00 8.54 L 5.50 5.52 L 6.00 2.72 L 6.50 0.75 L 7.00 0.04 L 7.50 0.75 L 8.00 2.72 L 8.50 5.52 L 9.00 8.54 L 9.50 11.13 L 10.00 12.71 L 10.50 12.95 L 11.00 11.79 L 11.50 9.48 L 12.00 6.54 L 12.50 3.59 L 13.00 1.28 L 13.50 0.12 L 14.00 0.36 L 14.50 1.95 L 15.00 4.53 L 15.50 7.55 L 16.00 10.35 L 16.50 12.32 L 17.00 13.03 L 17.50 12.32 L 18.00 10.35 L 18.50 7.55 L 19.00 4.53 L 19.50 1.95 L 20.00 0.36 L 20.50 0.12 L 21.00 1.28 L 21.50 3.59 L 22.00 6.54"
      }
    ]
  ]
};

export const VolubileTissue = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 6.54 L 2.50 9.48 L 3.00 11.79 L 3.50 12.95 L 4.00 12.71 L 4.50 11.13 L 5.00 8.54 L 5.50 5.52 L 6.00 2.72 L 6.50 0.75 L 7.00 0.04 L 7.50 0.75 L 8.00 2.72 L 8.50 5.52 L 9.00 8.54 L 9.50 11.13 L 10.00 12.71 L 10.50 12.95 L 11.00 11.79 L 11.50 9.48 L 12.00 6.54 L 12.50 3.59 L 13.00 1.28 L 13.50 0.12 L 14.00 0.36 L 14.50 1.95 L 15.00 4.53 L 15.50 7.55 L 16.00 10.35 L 16.50 12.32 L 17.00 13.03 L 17.50 12.32 L 18.00 10.35 L 18.50 7.55 L 19.00 4.53 L 19.50 1.95 L 20.00 0.36 L 20.50 0.12 L 21.00 1.28 L 21.50 3.59 L 22.00 6.54" />
      {children}
    </svg>
  );
});

export default VolubileTissue;
