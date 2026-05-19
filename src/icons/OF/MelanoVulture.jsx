import React from 'react';

export const iconData = {
  "id": "MelanoVulture",
  "name": "MelanoVulture",
  "category": "OF",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.36 8.84 L 13.87 7.42 L 14.23 10.16 L 13.60 9.25 L 13.80 10.50 L 13.35 9.43 L 11.45 8.13 L 8.97 8.77 L 10.85 9.70 L 11.20 11.38 L 12.88 9.27 L 13.98 7.51 L 12.55 9.12 L 13.60 7.58 L 14.68 9.14 L 16.03 8.62 L 17.84 10.52 L 20.42 12.78 L 17.83 10.21 L 20.36 7.63 L 21.00 9.78 L 18.82 12.74 L 20.07 12.49"
      }
    ]
  ]
};

export const MelanoVulture = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.36 8.84 L 13.87 7.42 L 14.23 10.16 L 13.60 9.25 L 13.80 10.50 L 13.35 9.43 L 11.45 8.13 L 8.97 8.77 L 10.85 9.70 L 11.20 11.38 L 12.88 9.27 L 13.98 7.51 L 12.55 9.12 L 13.60 7.58 L 14.68 9.14 L 16.03 8.62 L 17.84 10.52 L 20.42 12.78 L 17.83 10.21 L 20.36 7.63 L 21.00 9.78 L 18.82 12.74 L 20.07 12.49" />
      {children}
    </svg>
  );
});

export default MelanoVulture;
