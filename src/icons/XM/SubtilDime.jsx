import React from 'react';

export const iconData = {
  "id": "SubtilDime",
  "name": "SubtilDime",
  "category": "XM",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.48 L 2.50 10.22 L 3.00 12.37 L 3.50 13.45 L 4.00 13.22 L 4.50 11.75 L 5.00 9.34 L 5.50 6.53 L 6.00 3.92 L 6.50 2.09 L 7.00 1.43 L 7.50 2.09 L 8.00 3.92 L 8.50 6.53 L 9.00 9.34 L 9.50 11.75 L 10.00 13.22 L 10.50 13.45 L 11.00 12.37 L 11.50 10.22 L 12.00 7.48 L 12.50 4.73 L 13.00 2.59 L 13.50 1.50 L 14.00 1.73 L 14.50 3.20 L 15.00 5.61 L 15.50 8.42 L 16.00 11.03 L 16.50 12.86 L 17.00 13.52 L 17.50 12.86 L 18.00 11.03 L 18.50 8.42 L 19.00 5.61 L 19.50 3.20 L 20.00 1.73 L 20.50 1.50 L 21.00 2.59 L 21.50 4.73 L 22.00 7.48"
      }
    ]
  ]
};

export const SubtilDime = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.48 L 2.50 10.22 L 3.00 12.37 L 3.50 13.45 L 4.00 13.22 L 4.50 11.75 L 5.00 9.34 L 5.50 6.53 L 6.00 3.92 L 6.50 2.09 L 7.00 1.43 L 7.50 2.09 L 8.00 3.92 L 8.50 6.53 L 9.00 9.34 L 9.50 11.75 L 10.00 13.22 L 10.50 13.45 L 11.00 12.37 L 11.50 10.22 L 12.00 7.48 L 12.50 4.73 L 13.00 2.59 L 13.50 1.50 L 14.00 1.73 L 14.50 3.20 L 15.00 5.61 L 15.50 8.42 L 16.00 11.03 L 16.50 12.86 L 17.00 13.52 L 17.50 12.86 L 18.00 11.03 L 18.50 8.42 L 19.00 5.61 L 19.50 3.20 L 20.00 1.73 L 20.50 1.50 L 21.00 2.59 L 21.50 4.73 L 22.00 7.48" />
      {children}
    </svg>
  );
});

export default SubtilDime;
