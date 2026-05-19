import React from 'react';

export const iconData = {
  "id": "BlastPicture",
  "name": "BlastPicture",
  "category": "MA",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.60 11.53 L 14.52 10.48 L 14.87 12.23 L 16.19 11.72 L 15.52 9.71 L 14.73 9.18 L 16.11 11.46 L 18.18 12.38 L 16.73 11.51 L 19.21 12.01 L 19.18 10.36 L 21.60 8.37 L 19.09 10.01 L 21.70 12.87 L 20.12 15.60 L 20.21 17.97 L 22.69 20.79 L 23.00 23.00 L 21.79 23.00"
      }
    ]
  ]
};

export const BlastPicture = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.60 11.53 L 14.52 10.48 L 14.87 12.23 L 16.19 11.72 L 15.52 9.71 L 14.73 9.18 L 16.11 11.46 L 18.18 12.38 L 16.73 11.51 L 19.21 12.01 L 19.18 10.36 L 21.60 8.37 L 19.09 10.01 L 21.70 12.87 L 20.12 15.60 L 20.21 17.97 L 22.69 20.79 L 23.00 23.00 L 21.79 23.00" />
      {children}
    </svg>
  );
});

export default BlastPicture;
