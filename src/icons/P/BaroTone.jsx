import React from 'react';

export const iconData = {
  "id": "BaroTone",
  "name": "BaroTone",
  "category": "P",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.28 17.19 L 6.67 19.24 L 3.67 21.69 L 1.00 22.94 L 1.00 23.00 L 3.42 21.10 L 2.40 22.98 L 2.25 21.10 L 4.96 19.36 L 7.94 17.32 L 7.34 15.33 L 4.51 17.16 L 3.54 18.12 L 4.67 18.74 L 5.82 17.23 L 5.78 19.41 L 7.89 18.24 L 6.36 18.13 L 3.42 20.27 L 4.41 17.96 L 7.18 20.52 L 7.64 19.09 L 5.76 18.44"
      }
    ]
  ]
};

export const BaroTone = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.28 17.19 L 6.67 19.24 L 3.67 21.69 L 1.00 22.94 L 1.00 23.00 L 3.42 21.10 L 2.40 22.98 L 2.25 21.10 L 4.96 19.36 L 7.94 17.32 L 7.34 15.33 L 4.51 17.16 L 3.54 18.12 L 4.67 18.74 L 5.82 17.23 L 5.78 19.41 L 7.89 18.24 L 6.36 18.13 L 3.42 20.27 L 4.41 17.96 L 7.18 20.52 L 7.64 19.09 L 5.76 18.44" />
      {children}
    </svg>
  );
});

export default BaroTone;
