import React from 'react';

export const iconData = {
  "id": "ThoroHour",
  "name": "ThoroHour",
  "category": "JS",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.28 12.20 Q 19.27 21.88 17.05 2.61"
      }
    ],
    [
      "path",
      {
        "d": "M 10.46 16.61 Q 10.43 11.49 12.93 11.98"
      }
    ],
    [
      "path",
      {
        "d": "M 6.85 2.48 C 16.09 4.93, 7.72 4.13, 20.43 18.68"
      }
    ]
  ]
};

export const ThoroHour = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.28 12.20 Q 19.27 21.88 17.05 2.61" />
      <path d="M 10.46 16.61 Q 10.43 11.49 12.93 11.98" />
      <path d="M 6.85 2.48 C 16.09 4.93, 7.72 4.13, 20.43 18.68" />
      {children}
    </svg>
  );
});

export default ThoroHour;
