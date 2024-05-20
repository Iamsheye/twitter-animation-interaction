import styled from "styled-components";

type JustifyContent =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";

type FlexableDivProps = {
  $width?: string;
  $height?: string;
  $flexGap?: string;
  $mb?: string;
  $p?: string;
  $justifyContent?: JustifyContent;
  $wrap?: "wrap" | "nowrap";
  $alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  $flexDir?: "row" | "row-reverse" | "column" | "column-reverse";
};

const FlexibleDiv = styled.div<FlexableDivProps>`
  display: flex;
  gap: ${({ $flexGap }) => $flexGap && $flexGap};
  padding: ${({ $p }) => $p && $p};
  margin-bottom: ${({ $mb }) => $mb && $mb};
  align-items: ${({ $alignItems }) => $alignItems || "flex-start"};
  justify-content: ${({ $justifyContent }) => $justifyContent || "flex-start"};
  flex-wrap: ${({ $wrap }) => $wrap || "nowrap"};
  flex-direction: ${({ $flexDir }) => $flexDir || "row"};
  width: ${({ $width }) => $width || "auto"};
  height: ${({ $height }) => $height || "auto"};
`;

export default FlexibleDiv;
