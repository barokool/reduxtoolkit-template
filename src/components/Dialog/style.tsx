import styled from "styled-components";
import tw from "twin.macro";

export const Avatar = styled.img`
  ${tw`w-full h-full`}
`;

// export const Dropdown = {
//   Container: styled.ul<{ isVisible?: boolean }>`
//     ${tw`absolute phone:right-0 bg-white p-1 rounded-sm shadow-md z-50 duration-200 w-max text-black`}
//     ${({ isVisible }) =>
//       isVisible ? tw`visible opacity-100 top-6` : tw`invisible opacity-0 top-4`}
//   `,
//   Item: styled.li``,
//   Button: styled(_Button)`
//     ${tw`flex items-center px-1 py-0.5 w-full text-14 whitespace-nowrap hover:bg-primary hover:bg-opacity-10`}
//   `,
//   Icon: styled(_SVG)`
//     ${tw`w-2 h-2 inline-block mr-1`}
//   `,
// };
