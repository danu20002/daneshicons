import React from 'react';

export const iconData = {
  "id": "ScapoGym",
  "name": "ScapoGym",
  "category": "WZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.92 12.70 L 12.16 10.95 L 14.70 9.01 L 16.07 9.74 L 14.73 7.10 L 16.73 4.51 L 18.67 6.42 L 17.90 8.01 L 20.78 7.52 L 19.12 9.09 L 20.33 11.21 L 20.70 9.60 L 19.19 10.37 L 21.47 10.29 L 18.56 12.57 L 19.87 9.68 L 20.37 9.44"
      }
    ]
  ]
};

export const ScapoGym = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.92 12.70 L 12.16 10.95 L 14.70 9.01 L 16.07 9.74 L 14.73 7.10 L 16.73 4.51 L 18.67 6.42 L 17.90 8.01 L 20.78 7.52 L 19.12 9.09 L 20.33 11.21 L 20.70 9.60 L 19.19 10.37 L 21.47 10.29 L 18.56 12.57 L 19.87 9.68 L 20.37 9.44" />
      {children}
    </svg>
  );
});

export default ScapoGym;
