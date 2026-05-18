import React from 'react';

export const iconData = {
  id: "JapaneseYen",
  name: "JapaneseYen",
  category: "J",
  nodes: [["path",{"d":"M12 9.5V21m0-11.5L6 3m6 6.5L18 3"}],["path",{"d":"M6 15h12"}],["path",{"d":"M6 11h12"}]]
};

export const JapaneseYen = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M12 9.5V21m0-11.5L6 3m6 6.5L18 3" />
      <path d="M6 15h12" />
      <path d="M6 11h12" />
      {children}
    </svg>
  );
});

export default JapaneseYen;
