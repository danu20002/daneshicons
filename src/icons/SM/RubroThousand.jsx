import React from 'react';

export const iconData = {
  "id": "RubroThousand",
  "name": "RubroThousand",
  "category": "SM",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.13 11.53 A 6.33 6.57 125 0 0 4.50 16.28"
      }
    ],
    [
      "path",
      {
        "d": "M 15.11 18.93 Q 2.34 10.77 19.88 20.45"
      }
    ],
    [
      "path",
      {
        "d": "M 20.89 15.53 Q 21.06 9.40 11.69 19.93"
      }
    ]
  ]
};

export const RubroThousand = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.13 11.53 A 6.33 6.57 125 0 0 4.50 16.28" />
      <path d="M 15.11 18.93 Q 2.34 10.77 19.88 20.45" />
      <path d="M 20.89 15.53 Q 21.06 9.40 11.69 19.93" />
      {children}
    </svg>
  );
});

export default RubroThousand;
