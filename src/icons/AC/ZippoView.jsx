import React from 'react';

export const iconData = {
  "id": "ZippoView",
  "name": "ZippoView",
  "category": "AC",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.68 L 2.50 10.83 L 3.00 13.30 L 3.50 14.55 L 4.00 14.29 L 4.50 12.60 L 5.00 9.83 L 5.50 6.59 L 6.00 3.59 L 6.50 1.48 L 7.00 0.72 L 7.50 1.48 L 8.00 3.59 L 8.50 6.59 L 9.00 9.83 L 9.50 12.60 L 10.00 14.29 L 10.50 14.55 L 11.00 13.30 L 11.50 10.83 L 12.00 7.68 L 12.50 4.52 L 13.00 2.05 L 13.50 0.80 L 14.00 1.06 L 14.50 2.76 L 15.00 5.53 L 15.50 8.76 L 16.00 11.77 L 16.50 13.87 L 17.00 14.63 L 17.50 13.87 L 18.00 11.77 L 18.50 8.76 L 19.00 5.53 L 19.50 2.76 L 20.00 1.06 L 20.50 0.80 L 21.00 2.05 L 21.50 4.52 L 22.00 7.68"
      }
    ]
  ]
};

export const ZippoView = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.68 L 2.50 10.83 L 3.00 13.30 L 3.50 14.55 L 4.00 14.29 L 4.50 12.60 L 5.00 9.83 L 5.50 6.59 L 6.00 3.59 L 6.50 1.48 L 7.00 0.72 L 7.50 1.48 L 8.00 3.59 L 8.50 6.59 L 9.00 9.83 L 9.50 12.60 L 10.00 14.29 L 10.50 14.55 L 11.00 13.30 L 11.50 10.83 L 12.00 7.68 L 12.50 4.52 L 13.00 2.05 L 13.50 0.80 L 14.00 1.06 L 14.50 2.76 L 15.00 5.53 L 15.50 8.76 L 16.00 11.77 L 16.50 13.87 L 17.00 14.63 L 17.50 13.87 L 18.00 11.77 L 18.50 8.76 L 19.00 5.53 L 19.50 2.76 L 20.00 1.06 L 20.50 0.80 L 21.00 2.05 L 21.50 4.52 L 22.00 7.68" />
      {children}
    </svg>
  );
});

export default ZippoView;
