import React from 'react';

export const iconData = {
  "id": "LeptoCurb",
  "name": "LeptoCurb",
  "category": "ZB",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.61 9.23 A 3.40 4.34 59 0 0 3.91 11.04"
      }
    ],
    [
      "path",
      {
        "d": "M 10.70 13.89 Q 2.38 11.95 15.95 9.81"
      }
    ],
    [
      "path",
      {
        "d": "M 6.73 9.80 A 4.34 2.36 150 0 0 21.97 21.42"
      }
    ]
  ]
};

export const LeptoCurb = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.61 9.23 A 3.40 4.34 59 0 0 3.91 11.04" />
      <path d="M 10.70 13.89 Q 2.38 11.95 15.95 9.81" />
      <path d="M 6.73 9.80 A 4.34 2.36 150 0 0 21.97 21.42" />
      {children}
    </svg>
  );
});

export default LeptoCurb;
