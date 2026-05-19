import React from 'react';

export const iconData = {
  "id": "PrimoMelon",
  "name": "PrimoMelon",
  "category": "FT",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.78 8.70 L 17.25 14.38 L 15.30 20.78 L 9.62 17.25 L 3.22 15.30 L 6.75 9.62 L 8.70 3.22 L 14.38 6.75 Z"
      }
    ]
  ]
};

export const PrimoMelon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.78 8.70 L 17.25 14.38 L 15.30 20.78 L 9.62 17.25 L 3.22 15.30 L 6.75 9.62 L 8.70 3.22 L 14.38 6.75 Z" />
      {children}
    </svg>
  );
});

export default PrimoMelon;
