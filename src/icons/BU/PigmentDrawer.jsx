import React from 'react';

export const iconData = {
  "id": "PigmentDrawer",
  "name": "PigmentDrawer",
  "category": "BU",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.25 14.81 L 20.26 12.69 L 22.52 14.87 L 23.00 13.76 L 23.00 11.39 L 23.00 11.27 L 23.00 9.65 L 23.00 8.91 L 23.00 11.09 L 23.00 11.53 L 23.00 11.58 L 23.00 13.38 L 21.72 11.68 L 20.63 14.54 L 21.20 14.92 L 22.97 14.51 L 23.00 12.16 L 23.00 9.46"
      }
    ]
  ]
};

export const PigmentDrawer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.25 14.81 L 20.26 12.69 L 22.52 14.87 L 23.00 13.76 L 23.00 11.39 L 23.00 11.27 L 23.00 9.65 L 23.00 8.91 L 23.00 11.09 L 23.00 11.53 L 23.00 11.58 L 23.00 13.38 L 21.72 11.68 L 20.63 14.54 L 21.20 14.92 L 22.97 14.51 L 23.00 12.16 L 23.00 9.46" />
      {children}
    </svg>
  );
});

export default PigmentDrawer;
