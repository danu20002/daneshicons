import React from 'react';

export const iconData = {
  "id": "TestoQuiz",
  "name": "TestoQuiz",
  "category": "CM",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.20 14.83 L 17.03 2.31 L 7.34 9.01 L 19.56 11.92"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "14.83",
        "r": "0.90"
      }
    ],
    [
      "circle",
      {
        "cx": "17.03",
        "cy": "2.31",
        "r": "1.18"
      }
    ],
    [
      "circle",
      {
        "cx": "7.34",
        "cy": "9.01",
        "r": "0.97"
      }
    ],
    [
      "circle",
      {
        "cx": "19.56",
        "cy": "11.92",
        "r": "0.83"
      }
    ]
  ]
};

export const TestoQuiz = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.20 14.83 L 17.03 2.31 L 7.34 9.01 L 19.56 11.92" />
      <circle cx="15.20" cy="14.83" r="0.90" />
      <circle cx="17.03" cy="2.31" r="1.18" />
      <circle cx="7.34" cy="9.01" r="0.97" />
      <circle cx="19.56" cy="11.92" r="0.83" />
      {children}
    </svg>
  );
});

export default TestoQuiz;
