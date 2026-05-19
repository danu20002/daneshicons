import React from 'react';

export const iconData = {
  "id": "VidroParfait",
  "name": "VidroParfait",
  "category": "ES",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.14 18.53 L 18.37 19.23 L 19.69 22.21 L 21.13 19.61 L 18.73 18.89 L 19.01 16.53 L 19.13 17.83 L 17.88 18.15 L 17.16 16.85 L 17.37 16.90 L 16.48 15.09 L 18.30 12.71 L 15.92 12.82 L 13.68 12.51 L 13.36 13.88 L 13.10 12.63 L 10.55 11.58 L 8.48 9.55 L 8.18 11.70 L 9.40 11.78 L 11.84 12.67 L 11.48 10.61 L 10.57 10.55 L 10.76 12.82 L 11.93 10.54 L 9.57 11.16 L 8.99 9.36 L 9.91 6.68"
      }
    ]
  ]
};

export const VidroParfait = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.14 18.53 L 18.37 19.23 L 19.69 22.21 L 21.13 19.61 L 18.73 18.89 L 19.01 16.53 L 19.13 17.83 L 17.88 18.15 L 17.16 16.85 L 17.37 16.90 L 16.48 15.09 L 18.30 12.71 L 15.92 12.82 L 13.68 12.51 L 13.36 13.88 L 13.10 12.63 L 10.55 11.58 L 8.48 9.55 L 8.18 11.70 L 9.40 11.78 L 11.84 12.67 L 11.48 10.61 L 10.57 10.55 L 10.76 12.82 L 11.93 10.54 L 9.57 11.16 L 8.99 9.36 L 9.91 6.68" />
      {children}
    </svg>
  );
});

export default VidroParfait;
