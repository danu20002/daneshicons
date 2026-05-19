import React from 'react';

export const iconData = {
  "id": "SignoMattress",
  "name": "SignoMattress",
  "category": "GE",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.39 19.43 L 11.35 17.79 L 11.59 17.02 L 13.89 17.20 L 11.39 14.45 L 11.78 14.47 L 14.04 12.36 L 14.87 13.72 L 12.54 11.96 L 12.98 10.52 L 10.74 12.58 L 12.22 11.01 L 11.45 11.25 L 13.64 10.87 L 12.04 12.39 L 11.46 13.61 L 8.90 12.84 L 7.51 12.86 L 8.92 14.10 L 8.08 17.02 L 7.08 17.78 L 4.24 18.80 L 4.93 17.10 L 2.12 16.84 L 2.43 16.42 L 2.13 17.70 L 2.55 16.11"
      }
    ],
    [
      "path",
      {
        "d": "M 9.66 12.74 L 10.10 13.91 L 8.76 11.42 L 9.09 13.31 L 9.74 11.32 L 9.19 10.28 L 11.59 8.04 L 10.12 10.41 L 12.88 7.89 L 13.70 7.40 L 13.06 7.42 L 12.43 7.04 L 14.39 6.22 L 12.78 7.15 L 11.56 6.49 L 14.20 5.60 L 15.60 6.60 L 15.69 5.99 L 14.74 7.20 L 13.38 7.17 L 16.04 6.77 L 14.45 6.50"
      }
    ]
  ]
};

export const SignoMattress = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.39 19.43 L 11.35 17.79 L 11.59 17.02 L 13.89 17.20 L 11.39 14.45 L 11.78 14.47 L 14.04 12.36 L 14.87 13.72 L 12.54 11.96 L 12.98 10.52 L 10.74 12.58 L 12.22 11.01 L 11.45 11.25 L 13.64 10.87 L 12.04 12.39 L 11.46 13.61 L 8.90 12.84 L 7.51 12.86 L 8.92 14.10 L 8.08 17.02 L 7.08 17.78 L 4.24 18.80 L 4.93 17.10 L 2.12 16.84 L 2.43 16.42 L 2.13 17.70 L 2.55 16.11" />
      <path d="M 9.66 12.74 L 10.10 13.91 L 8.76 11.42 L 9.09 13.31 L 9.74 11.32 L 9.19 10.28 L 11.59 8.04 L 10.12 10.41 L 12.88 7.89 L 13.70 7.40 L 13.06 7.42 L 12.43 7.04 L 14.39 6.22 L 12.78 7.15 L 11.56 6.49 L 14.20 5.60 L 15.60 6.60 L 15.69 5.99 L 14.74 7.20 L 13.38 7.17 L 16.04 6.77 L 14.45 6.50" />
      {children}
    </svg>
  );
});

export default SignoMattress;
