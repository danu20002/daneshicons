import React from 'react';

export const iconData = {
  "id": "TotemWreck",
  "name": "TotemWreck",
  "category": "ES",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.50 8.16 L 14.05 10.79 L 13.88 10.39 L 13.82 11.76 L 13.64 14.17 L 13.23 11.65 L 11.76 13.88 L 11.56 15.38 L 13.55 12.94 L 13.91 11.86 L 13.05 12.55 L 14.77 12.49 L 15.30 9.49 L 14.77 10.13 L 16.67 7.68 L 17.03 5.33 L 15.54 7.49 L 13.48 5.68 L 10.96 4.50 L 12.47 4.97 L 13.30 4.02"
      }
    ]
  ]
};

export const TotemWreck = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.50 8.16 L 14.05 10.79 L 13.88 10.39 L 13.82 11.76 L 13.64 14.17 L 13.23 11.65 L 11.76 13.88 L 11.56 15.38 L 13.55 12.94 L 13.91 11.86 L 13.05 12.55 L 14.77 12.49 L 15.30 9.49 L 14.77 10.13 L 16.67 7.68 L 17.03 5.33 L 15.54 7.49 L 13.48 5.68 L 10.96 4.50 L 12.47 4.97 L 13.30 4.02" />
      {children}
    </svg>
  );
});

export default TotemWreck;
