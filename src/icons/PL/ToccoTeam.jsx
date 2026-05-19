import React from 'react';

export const iconData = {
  "id": "ToccoTeam",
  "name": "ToccoTeam",
  "category": "PL",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.89 L 2.50 10.26 L 3.00 12.12 L 3.50 13.06 L 4.00 12.87 L 4.50 11.59 L 5.00 9.51 L 5.50 7.07 L 6.00 4.81 L 6.50 3.22 L 7.00 2.65 L 7.50 3.22 L 8.00 4.81 L 8.50 7.07 L 9.00 9.51 L 9.50 11.59 L 10.00 12.87 L 10.50 13.06 L 11.00 12.12 L 11.50 10.26 L 12.00 7.89 L 12.50 5.51 L 13.00 3.65 L 13.50 2.72 L 14.00 2.91 L 14.50 4.19 L 15.00 6.27 L 15.50 8.71 L 16.00 10.97 L 16.50 12.55 L 17.00 13.12 L 17.50 12.55 L 18.00 10.97 L 18.50 8.71 L 19.00 6.27 L 19.50 4.19 L 20.00 2.91 L 20.50 2.72 L 21.00 3.65 L 21.50 5.51 L 22.00 7.89"
      }
    ]
  ]
};

export const ToccoTeam = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.89 L 2.50 10.26 L 3.00 12.12 L 3.50 13.06 L 4.00 12.87 L 4.50 11.59 L 5.00 9.51 L 5.50 7.07 L 6.00 4.81 L 6.50 3.22 L 7.00 2.65 L 7.50 3.22 L 8.00 4.81 L 8.50 7.07 L 9.00 9.51 L 9.50 11.59 L 10.00 12.87 L 10.50 13.06 L 11.00 12.12 L 11.50 10.26 L 12.00 7.89 L 12.50 5.51 L 13.00 3.65 L 13.50 2.72 L 14.00 2.91 L 14.50 4.19 L 15.00 6.27 L 15.50 8.71 L 16.00 10.97 L 16.50 12.55 L 17.00 13.12 L 17.50 12.55 L 18.00 10.97 L 18.50 8.71 L 19.00 6.27 L 19.50 4.19 L 20.00 2.91 L 20.50 2.72 L 21.00 3.65 L 21.50 5.51 L 22.00 7.89" />
      {children}
    </svg>
  );
});

export default ToccoTeam;
