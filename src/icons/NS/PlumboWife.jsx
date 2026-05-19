import React from 'react';

export const iconData = {
  "id": "PlumboWife",
  "name": "PlumboWife",
  "category": "NS",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.41 19.59 L 5.83 17.59 L 4.77 7.86 L 13.70 3.85 L 20.28 11.10 Z"
      }
    ]
  ]
};

export const PlumboWife = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.41 19.59 L 5.83 17.59 L 4.77 7.86 L 13.70 3.85 L 20.28 11.10 Z" />
      {children}
    </svg>
  );
});

export default PlumboWife;
