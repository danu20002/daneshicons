import React from 'react';

export const iconData = {
  "id": "PlexiSmash",
  "name": "PlexiSmash",
  "category": "WZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.58 9.46 L 5.23 11.72 L 2.99 14.08 L 5.24 16.45 L 2.72 18.23 L 1.53 16.79 L 1.00 15.27 L 1.00 15.61 L 3.18 17.01 L 1.10 16.39 L 1.00 18.96 L 1.00 17.21 L 1.09 16.13 L 1.32 13.38 L 1.00 10.58 L 2.90 11.38 L 2.14 11.75"
      }
    ]
  ]
};

export const PlexiSmash = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.58 9.46 L 5.23 11.72 L 2.99 14.08 L 5.24 16.45 L 2.72 18.23 L 1.53 16.79 L 1.00 15.27 L 1.00 15.61 L 3.18 17.01 L 1.10 16.39 L 1.00 18.96 L 1.00 17.21 L 1.09 16.13 L 1.32 13.38 L 1.00 10.58 L 2.90 11.38 L 2.14 11.75" />
      {children}
    </svg>
  );
});

export default PlexiSmash;
