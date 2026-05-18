import React from 'react';

export const iconData = {
  id: "UtilityPole",
  name: "UtilityPole",
  category: "U",
  nodes: [["path",{"d":"M12 2v20"}],["path",{"d":"M2 5h20"}],["path",{"d":"M3 3v2"}],["path",{"d":"M7 3v2"}],["path",{"d":"M17 3v2"}],["path",{"d":"M21 3v2"}],["path",{"d":"m19 5-7 7-7-7"}]]
};

export const UtilityPole = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M12 2v20" />
      <path d="M2 5h20" />
      <path d="M3 3v2" />
      <path d="M7 3v2" />
      <path d="M17 3v2" />
      <path d="M21 3v2" />
      <path d="m19 5-7 7-7-7" />
      {children}
    </svg>
  );
});

export default UtilityPole;
