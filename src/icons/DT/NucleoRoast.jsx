import React from 'react';

export const iconData = {
  "id": "NucleoRoast",
  "name": "NucleoRoast",
  "category": "DT",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.21 L 2.50 8.38 L 3.00 9.44 L 3.50 10.28 L 4.00 10.82 L 4.50 11.00 L 5.00 10.82 L 5.50 10.28 L 6.00 9.44 L 6.50 8.38 L 7.00 7.21 L 7.50 6.04 L 8.00 4.98 L 8.50 4.14 L 9.00 3.60 L 9.50 3.41 L 10.00 3.60 L 10.50 4.14 L 11.00 4.98 L 11.50 6.04 L 12.00 7.21 L 12.50 8.38 L 13.00 9.44 L 13.50 10.28 L 14.00 10.82 L 14.50 11.00 L 15.00 10.82 L 15.50 10.28 L 16.00 9.44 L 16.50 8.38 L 17.00 7.21 L 17.50 6.04 L 18.00 4.98 L 18.50 4.14 L 19.00 3.60 L 19.50 3.41 L 20.00 3.60 L 20.50 4.14 L 21.00 4.98 L 21.50 6.04 L 22.00 7.21"
      }
    ]
  ]
};

export const NucleoRoast = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.21 L 2.50 8.38 L 3.00 9.44 L 3.50 10.28 L 4.00 10.82 L 4.50 11.00 L 5.00 10.82 L 5.50 10.28 L 6.00 9.44 L 6.50 8.38 L 7.00 7.21 L 7.50 6.04 L 8.00 4.98 L 8.50 4.14 L 9.00 3.60 L 9.50 3.41 L 10.00 3.60 L 10.50 4.14 L 11.00 4.98 L 11.50 6.04 L 12.00 7.21 L 12.50 8.38 L 13.00 9.44 L 13.50 10.28 L 14.00 10.82 L 14.50 11.00 L 15.00 10.82 L 15.50 10.28 L 16.00 9.44 L 16.50 8.38 L 17.00 7.21 L 17.50 6.04 L 18.00 4.98 L 18.50 4.14 L 19.00 3.60 L 19.50 3.41 L 20.00 3.60 L 20.50 4.14 L 21.00 4.98 L 21.50 6.04 L 22.00 7.21" />
      {children}
    </svg>
  );
});

export default NucleoRoast;
