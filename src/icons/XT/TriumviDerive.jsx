import React from 'react';

export const iconData = {
  "id": "TriumviDerive",
  "name": "TriumviDerive",
  "category": "XT",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.77 12.00 a 8.23 8.23 0 1 0 16.46 0 a 8.23 8.23 0 1 0 -16.46 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.87 7.88 a 7.13 2.138668174841795 0 1 0 14.26 0 a 7.13 2.138668174841795 0 1 0 -14.26 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.77 12.00 a 8.23 2.4695212929043917 0 1 0 16.46 0 a 8.23 2.4695212929043917 0 1 0 -16.46 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.87 16.12 a 7.13 2.138668174841795 0 1 0 14.26 0 a 7.13 2.138668174841795 0 1 0 -14.26 0"
      }
    ],
    [
      "path",
      {
        "d": "M 17.82 6.18 A 2 2 0 0 0 17.82 17.82"
      }
    ],
    [
      "path",
      {
        "d": "M 17.82 6.18 A 2 2 0 0 1 17.82 17.82"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.77 A 2 2 0 0 0 12.00 20.23"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.77 A 2 2 0 0 1 12.00 20.23"
      }
    ],
    [
      "path",
      {
        "d": "M 6.18 6.18 A 2 2 0 0 0 6.18 17.82"
      }
    ],
    [
      "path",
      {
        "d": "M 6.18 6.18 A 2 2 0 0 1 6.18 17.82"
      }
    ]
  ]
};

export const TriumviDerive = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.77 12.00 a 8.23 8.23 0 1 0 16.46 0 a 8.23 8.23 0 1 0 -16.46 0" />
      <path d="M 4.87 7.88 a 7.13 2.138668174841795 0 1 0 14.26 0 a 7.13 2.138668174841795 0 1 0 -14.26 0" />
      <path d="M 3.77 12.00 a 8.23 2.4695212929043917 0 1 0 16.46 0 a 8.23 2.4695212929043917 0 1 0 -16.46 0" />
      <path d="M 4.87 16.12 a 7.13 2.138668174841795 0 1 0 14.26 0 a 7.13 2.138668174841795 0 1 0 -14.26 0" />
      <path d="M 17.82 6.18 A 2 2 0 0 0 17.82 17.82" />
      <path d="M 17.82 6.18 A 2 2 0 0 1 17.82 17.82" />
      <path d="M 12.00 3.77 A 2 2 0 0 0 12.00 20.23" />
      <path d="M 12.00 3.77 A 2 2 0 0 1 12.00 20.23" />
      <path d="M 6.18 6.18 A 2 2 0 0 0 6.18 17.82" />
      <path d="M 6.18 6.18 A 2 2 0 0 1 6.18 17.82" />
      {children}
    </svg>
  );
});

export default TriumviDerive;
