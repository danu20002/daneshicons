import React from 'react';

export const iconData = {
  "id": "DracoWrath",
  "name": "DracoWrath",
  "category": "EO",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.90 8.70 L 10.90 8.70"
      }
    ],
    [
      "path",
      {
        "d": "M 17.41 9.23 L 15.41 12.69"
      }
    ],
    [
      "path",
      {
        "d": "M 11.70 18.07 L 9.70 14.60"
      }
    ]
  ]
};

export const DracoWrath = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.90 8.70 L 10.90 8.70" />
      <path d="M 17.41 9.23 L 15.41 12.69" />
      <path d="M 11.70 18.07 L 9.70 14.60" />
      {children}
    </svg>
  );
});

export default DracoWrath;
