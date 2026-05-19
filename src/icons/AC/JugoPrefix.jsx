import React from 'react';

export const iconData = {
  "id": "JugoPrefix",
  "name": "JugoPrefix",
  "category": "AC",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 6.81 L 2.50 9.83 L 3.00 12.19 L 3.50 13.37 L 4.00 13.13 L 4.50 11.51 L 5.00 8.86 L 5.50 5.77 L 6.00 2.91 L 6.50 0.90 L 7.00 0.17 L 7.50 0.90 L 8.00 2.91 L 8.50 5.77 L 9.00 8.86 L 9.50 11.51 L 10.00 13.13 L 10.50 13.37 L 11.00 12.19 L 11.50 9.83 L 12.00 6.81 L 12.50 3.80 L 13.00 1.44 L 13.50 0.25 L 14.00 0.50 L 14.50 2.12 L 15.00 4.76 L 15.50 7.85 L 16.00 10.72 L 16.50 12.73 L 17.00 13.45 L 17.50 12.73 L 18.00 10.72 L 18.50 7.85 L 19.00 4.76 L 19.50 2.12 L 20.00 0.50 L 20.50 0.25 L 21.00 1.44 L 21.50 3.80 L 22.00 6.81"
      }
    ]
  ]
};

export const JugoPrefix = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 6.81 L 2.50 9.83 L 3.00 12.19 L 3.50 13.37 L 4.00 13.13 L 4.50 11.51 L 5.00 8.86 L 5.50 5.77 L 6.00 2.91 L 6.50 0.90 L 7.00 0.17 L 7.50 0.90 L 8.00 2.91 L 8.50 5.77 L 9.00 8.86 L 9.50 11.51 L 10.00 13.13 L 10.50 13.37 L 11.00 12.19 L 11.50 9.83 L 12.00 6.81 L 12.50 3.80 L 13.00 1.44 L 13.50 0.25 L 14.00 0.50 L 14.50 2.12 L 15.00 4.76 L 15.50 7.85 L 16.00 10.72 L 16.50 12.73 L 17.00 13.45 L 17.50 12.73 L 18.00 10.72 L 18.50 7.85 L 19.00 4.76 L 19.50 2.12 L 20.00 0.50 L 20.50 0.25 L 21.00 1.44 L 21.50 3.80 L 22.00 6.81" />
      {children}
    </svg>
  );
});

export default JugoPrefix;
