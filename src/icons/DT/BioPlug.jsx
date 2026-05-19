import React from 'react';

export const iconData = {
  "id": "BioPlug",
  "name": "BioPlug",
  "category": "DT",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.66 L 2.50 9.45 L 3.00 10.85 L 3.50 11.56 L 4.00 11.41 L 4.50 10.45 L 5.00 8.88 L 5.50 7.04 L 6.00 5.34 L 6.50 4.14 L 7.00 3.71 L 7.50 4.14 L 8.00 5.34 L 8.50 7.04 L 9.00 8.88 L 9.50 10.45 L 10.00 11.41 L 10.50 11.56 L 11.00 10.85 L 11.50 9.45 L 12.00 7.66 L 12.50 5.87 L 13.00 4.47 L 13.50 3.76 L 14.00 3.90 L 14.50 4.87 L 15.00 6.44 L 15.50 8.28 L 16.00 9.98 L 16.50 11.18 L 17.00 11.61 L 17.50 11.18 L 18.00 9.98 L 18.50 8.28 L 19.00 6.44 L 19.50 4.87 L 20.00 3.90 L 20.50 3.76 L 21.00 4.47 L 21.50 5.87 L 22.00 7.66"
      }
    ]
  ]
};

export const BioPlug = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.66 L 2.50 9.45 L 3.00 10.85 L 3.50 11.56 L 4.00 11.41 L 4.50 10.45 L 5.00 8.88 L 5.50 7.04 L 6.00 5.34 L 6.50 4.14 L 7.00 3.71 L 7.50 4.14 L 8.00 5.34 L 8.50 7.04 L 9.00 8.88 L 9.50 10.45 L 10.00 11.41 L 10.50 11.56 L 11.00 10.85 L 11.50 9.45 L 12.00 7.66 L 12.50 5.87 L 13.00 4.47 L 13.50 3.76 L 14.00 3.90 L 14.50 4.87 L 15.00 6.44 L 15.50 8.28 L 16.00 9.98 L 16.50 11.18 L 17.00 11.61 L 17.50 11.18 L 18.00 9.98 L 18.50 8.28 L 19.00 6.44 L 19.50 4.87 L 20.00 3.90 L 20.50 3.76 L 21.00 4.47 L 21.50 5.87 L 22.00 7.66" />
      {children}
    </svg>
  );
});

export default BioPlug;
