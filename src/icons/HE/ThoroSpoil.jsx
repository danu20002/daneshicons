import React from 'react';

export const iconData = {
  "id": "ThoroSpoil",
  "name": "ThoroSpoil",
  "category": "HE",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.60 15.52 L 6.67 9.82 L 8.48 3.60 L 14.18 6.67 L 20.40 8.48 L 17.33 14.18 L 15.52 20.40 L 9.82 17.33 Z"
      }
    ]
  ]
};

export const ThoroSpoil = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.60 15.52 L 6.67 9.82 L 8.48 3.60 L 14.18 6.67 L 20.40 8.48 L 17.33 14.18 L 15.52 20.40 L 9.82 17.33 Z" />
      {children}
    </svg>
  );
});

export default ThoroSpoil;
