import React from 'react';

export const iconData = {
  "id": "UndosoWarrant",
  "name": "UndosoWarrant",
  "category": "XK",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.32 6.25 C 11.43 9.76, 19.62 10.60, 21.38 18.84"
      }
    ],
    [
      "path",
      {
        "d": "M 9.31 9.80 C 10.77 10.93, 5.34 8.75, 20.76 19.38"
      }
    ],
    [
      "path",
      {
        "d": "M 2.99 9.08 C 8.58 10.91, 5.46 11.51, 18.45 17.70"
      }
    ],
    [
      "path",
      {
        "d": "M 3.17 6.61 C 8.69 4.97, 7.31 8.99, 17.83 17.91"
      }
    ],
    [
      "path",
      {
        "d": "M 2.44 8.08 C 6.93 17.46, 10.67 18.40, 18.76 14.70"
      }
    ],
    [
      "path",
      {
        "d": "M 5.01 2.05 C 12.25 16.56, 13.03 15.40, 18.53 15.62"
      }
    ]
  ]
};

export const UndosoWarrant = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.32 6.25 C 11.43 9.76, 19.62 10.60, 21.38 18.84" />
      <path d="M 9.31 9.80 C 10.77 10.93, 5.34 8.75, 20.76 19.38" />
      <path d="M 2.99 9.08 C 8.58 10.91, 5.46 11.51, 18.45 17.70" />
      <path d="M 3.17 6.61 C 8.69 4.97, 7.31 8.99, 17.83 17.91" />
      <path d="M 2.44 8.08 C 6.93 17.46, 10.67 18.40, 18.76 14.70" />
      <path d="M 5.01 2.05 C 12.25 16.56, 13.03 15.40, 18.53 15.62" />
      {children}
    </svg>
  );
});

export default UndosoWarrant;
