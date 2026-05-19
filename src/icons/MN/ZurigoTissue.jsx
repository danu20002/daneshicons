import React from 'react';

export const iconData = {
  "id": "ZurigoTissue",
  "name": "ZurigoTissue",
  "category": "MN",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.67 L 2.50 9.44 L 3.00 11.05 L 3.50 12.32 L 4.00 13.13 L 4.50 13.41 L 5.00 13.13 L 5.50 12.32 L 6.00 11.05 L 6.50 9.44 L 7.00 7.67 L 7.50 5.89 L 8.00 4.29 L 8.50 3.02 L 9.00 2.21 L 9.50 1.93 L 10.00 2.21 L 10.50 3.02 L 11.00 4.29 L 11.50 5.89 L 12.00 7.67 L 12.50 9.44 L 13.00 11.05 L 13.50 12.32 L 14.00 13.13 L 14.50 13.41 L 15.00 13.13 L 15.50 12.32 L 16.00 11.05 L 16.50 9.44 L 17.00 7.67 L 17.50 5.89 L 18.00 4.29 L 18.50 3.02 L 19.00 2.21 L 19.50 1.93 L 20.00 2.21 L 20.50 3.02 L 21.00 4.29 L 21.50 5.89 L 22.00 7.67"
      }
    ]
  ]
};

export const ZurigoTissue = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.67 L 2.50 9.44 L 3.00 11.05 L 3.50 12.32 L 4.00 13.13 L 4.50 13.41 L 5.00 13.13 L 5.50 12.32 L 6.00 11.05 L 6.50 9.44 L 7.00 7.67 L 7.50 5.89 L 8.00 4.29 L 8.50 3.02 L 9.00 2.21 L 9.50 1.93 L 10.00 2.21 L 10.50 3.02 L 11.00 4.29 L 11.50 5.89 L 12.00 7.67 L 12.50 9.44 L 13.00 11.05 L 13.50 12.32 L 14.00 13.13 L 14.50 13.41 L 15.00 13.13 L 15.50 12.32 L 16.00 11.05 L 16.50 9.44 L 17.00 7.67 L 17.50 5.89 L 18.00 4.29 L 18.50 3.02 L 19.00 2.21 L 19.50 1.93 L 20.00 2.21 L 20.50 3.02 L 21.00 4.29 L 21.50 5.89 L 22.00 7.67" />
      {children}
    </svg>
  );
});

export default ZurigoTissue;
