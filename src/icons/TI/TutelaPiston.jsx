import React from 'react';

export const iconData = {
  "id": "TutelaPiston",
  "name": "TutelaPiston",
  "category": "TI",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.22 13.79 L 16.91 11.12 L 16.95 13.96 L 15.16 14.51 L 14.98 12.58 L 15.07 11.76 L 14.92 9.56 L 13.26 7.66 L 10.62 9.33 L 7.83 8.13 L 9.05 9.16 L 10.11 9.07 L 10.80 6.80 L 9.29 7.25 L 7.35 9.09 L 8.92 7.82 L 6.36 9.07 L 9.12 7.55 L 8.44 9.86 L 10.75 10.39 L 13.22 12.11 L 15.04 13.82 L 17.17 11.91 L 16.72 13.51 L 18.55 11.24 L 17.60 9.16 L 17.73 7.37 L 17.92 6.58 L 15.26 5.70 L 17.44 3.63 L 19.78 4.61 L 19.46 4.52 L 16.82 5.40"
      }
    ]
  ]
};

export const TutelaPiston = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.22 13.79 L 16.91 11.12 L 16.95 13.96 L 15.16 14.51 L 14.98 12.58 L 15.07 11.76 L 14.92 9.56 L 13.26 7.66 L 10.62 9.33 L 7.83 8.13 L 9.05 9.16 L 10.11 9.07 L 10.80 6.80 L 9.29 7.25 L 7.35 9.09 L 8.92 7.82 L 6.36 9.07 L 9.12 7.55 L 8.44 9.86 L 10.75 10.39 L 13.22 12.11 L 15.04 13.82 L 17.17 11.91 L 16.72 13.51 L 18.55 11.24 L 17.60 9.16 L 17.73 7.37 L 17.92 6.58 L 15.26 5.70 L 17.44 3.63 L 19.78 4.61 L 19.46 4.52 L 16.82 5.40" />
      {children}
    </svg>
  );
});

export default TutelaPiston;
