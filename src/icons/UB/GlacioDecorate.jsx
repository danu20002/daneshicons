import React from 'react';

export const iconData = {
  "id": "GlacioDecorate",
  "name": "GlacioDecorate",
  "category": "UB",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.49 19.51 L 3.19 19.25 L 2.20 20.24 L 1.63 19.74 L 1.00 18.43 L 1.00 18.35 L 2.77 20.16 L 4.18 18.73 L 4.72 18.61 L 6.07 15.86 L 7.19 14.41 L 5.85 15.68 L 7.63 15.30 L 8.89 17.82 L 9.19 20.08 L 6.33 18.71 L 4.23 21.56 L 6.33 20.86 L 3.35 23.00 L 2.28 20.28 L 3.54 22.17 L 2.13 23.00 L 3.85 23.00"
      }
    ]
  ]
};

export const GlacioDecorate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.49 19.51 L 3.19 19.25 L 2.20 20.24 L 1.63 19.74 L 1.00 18.43 L 1.00 18.35 L 2.77 20.16 L 4.18 18.73 L 4.72 18.61 L 6.07 15.86 L 7.19 14.41 L 5.85 15.68 L 7.63 15.30 L 8.89 17.82 L 9.19 20.08 L 6.33 18.71 L 4.23 21.56 L 6.33 20.86 L 3.35 23.00 L 2.28 20.28 L 3.54 22.17 L 2.13 23.00 L 3.85 23.00" />
      {children}
    </svg>
  );
});

export default GlacioDecorate;
