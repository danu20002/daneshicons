import React from 'react';

export const iconData = {
  "id": "PlexiDilute",
  "name": "PlexiDilute",
  "category": "BU",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.67 11.07 L 7.95 11.46 L 5.35 12.52 L 3.52 12.68 L 5.53 13.28 L 7.43 15.82 L 7.57 14.01 L 5.02 15.73 L 2.18 13.11 L 2.73 12.61 L 5.65 14.02 L 8.15 13.07 L 9.60 13.51 L 11.05 14.29 L 9.23 12.40 L 10.05 13.65 L 9.06 14.76 L 8.23 11.89 L 6.78 13.73 L 8.57 12.71 L 7.67 11.59"
      }
    ]
  ]
};

export const PlexiDilute = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.67 11.07 L 7.95 11.46 L 5.35 12.52 L 3.52 12.68 L 5.53 13.28 L 7.43 15.82 L 7.57 14.01 L 5.02 15.73 L 2.18 13.11 L 2.73 12.61 L 5.65 14.02 L 8.15 13.07 L 9.60 13.51 L 11.05 14.29 L 9.23 12.40 L 10.05 13.65 L 9.06 14.76 L 8.23 11.89 L 6.78 13.73 L 8.57 12.71 L 7.67 11.59" />
      {children}
    </svg>
  );
});

export default PlexiDilute;
