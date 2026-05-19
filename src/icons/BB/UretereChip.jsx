import React from 'react';

export const iconData = {
  "id": "UretereChip",
  "name": "UretereChip",
  "category": "BB",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.93 16.97 L 12.87 16.80 L 11.61 13.90 L 13.37 14.84 L 10.50 12.08 L 7.74 14.50 L 8.30 13.08 L 10.62 16.03 L 8.09 13.04 L 6.88 11.89 L 8.74 11.32 L 10.60 8.35 L 13.45 6.67 L 14.05 7.65 L 16.73 8.49 L 14.01 10.96 L 14.50 8.64 L 14.39 11.25 L 14.85 13.62 L 12.49 16.38"
      }
    ]
  ]
};

export const UretereChip = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.93 16.97 L 12.87 16.80 L 11.61 13.90 L 13.37 14.84 L 10.50 12.08 L 7.74 14.50 L 8.30 13.08 L 10.62 16.03 L 8.09 13.04 L 6.88 11.89 L 8.74 11.32 L 10.60 8.35 L 13.45 6.67 L 14.05 7.65 L 16.73 8.49 L 14.01 10.96 L 14.50 8.64 L 14.39 11.25 L 14.85 13.62 L 12.49 16.38" />
      {children}
    </svg>
  );
});

export default UretereChip;
