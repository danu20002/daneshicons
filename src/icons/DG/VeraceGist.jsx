import React from 'react';

export const iconData = {
  "id": "VeraceGist",
  "name": "VeraceGist",
  "category": "DG",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.37 16.78 L 4.09 14.28 L 3.75 15.20 L 6.17 14.03 L 6.52 15.20 L 8.88 17.81 L 11.28 16.28 L 12.80 19.13 L 14.41 17.53 L 11.48 19.04 L 8.79 17.49 L 10.08 19.39 L 12.79 17.25 L 9.95 16.62 L 9.39 17.11 L 7.47 18.48 L 6.59 21.25 L 8.52 22.85 L 8.34 19.96 L 8.96 22.40 L 7.09 23.00"
      }
    ]
  ]
};

export const VeraceGist = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.37 16.78 L 4.09 14.28 L 3.75 15.20 L 6.17 14.03 L 6.52 15.20 L 8.88 17.81 L 11.28 16.28 L 12.80 19.13 L 14.41 17.53 L 11.48 19.04 L 8.79 17.49 L 10.08 19.39 L 12.79 17.25 L 9.95 16.62 L 9.39 17.11 L 7.47 18.48 L 6.59 21.25 L 8.52 22.85 L 8.34 19.96 L 8.96 22.40 L 7.09 23.00" />
      {children}
    </svg>
  );
});

export default VeraceGist;
