import React from 'react';

export const iconData = {
  id: "UserRoundX",
  name: "UserRoundX",
  category: "U",
  nodes: [["path",{"d":"M2 21a8 8 0 0 1 11.873-7"}],["circle",{"cx":"10","cy":"8","r":"5"}],["path",{"d":"m17 17 5 5"}],["path",{"d":"m22 17-5 5"}]]
};

export const UserRoundX = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M2 21a8 8 0 0 1 11.873-7" />
      <circle cx="10" cy="8" r="5" />
      <path d="m17 17 5 5" />
      <path d="m22 17-5 5" />
      {children}
    </svg>
  );
});

export default UserRoundX;
