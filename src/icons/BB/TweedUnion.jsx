import React from 'react';

export const iconData = {
  "id": "TweedUnion",
  "name": "TweedUnion",
  "category": "BB",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.83 6.06 L 16.64 7.85 L 15.34 10.47 L 17.33 12.09 L 15.23 11.73 L 14.98 9.93 L 12.10 11.75 L 10.22 9.48 L 11.38 8.73 L 9.43 10.34 L 12.07 7.41 L 10.78 5.65 L 13.50 7.68 L 13.02 4.80 L 13.97 6.87 L 13.99 7.03 L 15.53 7.55 L 16.70 5.77 L 16.89 4.53 L 17.83 5.62 L 20.00 5.38 L 19.29 4.60 L 19.26 4.74 L 19.81 5.36 L 22.53 5.05"
      }
    ]
  ]
};

export const TweedUnion = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.83 6.06 L 16.64 7.85 L 15.34 10.47 L 17.33 12.09 L 15.23 11.73 L 14.98 9.93 L 12.10 11.75 L 10.22 9.48 L 11.38 8.73 L 9.43 10.34 L 12.07 7.41 L 10.78 5.65 L 13.50 7.68 L 13.02 4.80 L 13.97 6.87 L 13.99 7.03 L 15.53 7.55 L 16.70 5.77 L 16.89 4.53 L 17.83 5.62 L 20.00 5.38 L 19.29 4.60 L 19.26 4.74 L 19.81 5.36 L 22.53 5.05" />
      {children}
    </svg>
  );
});

export default TweedUnion;
