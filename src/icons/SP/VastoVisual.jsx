import React from 'react';

export const iconData = {
  "id": "VastoVisual",
  "name": "VastoVisual",
  "category": "SP",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.66 18.05 L 11.25 19.46 L 12.45 17.69 L 10.51 20.58 L 10.95 19.24 L 11.46 21.01 L 11.33 23.00 L 9.02 23.00 L 10.37 23.00 L 9.04 22.03 L 11.06 19.55 L 13.95 19.59 L 11.19 17.75 L 9.71 15.15 L 7.98 15.07 L 6.59 16.34 L 4.17 17.52 L 6.60 19.73 L 9.36 17.86 L 11.85 15.92 L 8.93 18.55"
      }
    ]
  ]
};

export const VastoVisual = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.66 18.05 L 11.25 19.46 L 12.45 17.69 L 10.51 20.58 L 10.95 19.24 L 11.46 21.01 L 11.33 23.00 L 9.02 23.00 L 10.37 23.00 L 9.04 22.03 L 11.06 19.55 L 13.95 19.59 L 11.19 17.75 L 9.71 15.15 L 7.98 15.07 L 6.59 16.34 L 4.17 17.52 L 6.60 19.73 L 9.36 17.86 L 11.85 15.92 L 8.93 18.55" />
      {children}
    </svg>
  );
});

export default VastoVisual;
