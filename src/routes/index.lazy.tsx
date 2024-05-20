import Button from "@/components/Button";
import Container from "@/components/Container";
import FlexibleDiv from "@/components/Flex";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import styled from "styled-components";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

type ButtonState = "failed" | "redeploy" | "success" | "closed";

const IndexPageStyles = styled.div`
  .commit,
  .status span {
    color: #fff;
    font-size: 0.875rem;
    font-weight: 500;
    font-family: "Roboto Mono", monospace;
  }

  .dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #d8d8d8;
  }

  .footer {
    height: 48px;
    transition-property: width;
    transition-duration: 0.25s;
    transition-timing-function: ease-in-out;

    &.failed {
      width: 153px;
    }

    &.redeploy {
      width: 344px;
    }

    &.success {
      width: 354.5px;
    }

    &.closed {
      width: 158px;
    }
  }

  .status {
    opacity: 0;
    transform: scale(0.95) translateY(4px);
    transition-property: opacity, transform;
    transition-duration: 0.25s;
    transition-timing-function: ease-in-out;
    transition-delay: 0.25s;
  }

  .show-status {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  .deploy-info {
    z-index: -1;
    position: absolute;
    top: -145%;
    width: 100%;
    padding: 8px;
    background: #181818;
    border-radius: 12px 12px 0 0;
    opacity: 0;
    visibility: hidden;
    filter: blur(0.75px);
    transform: translateY(48px);

    transition:
      filter 0.25s ease-in-out,
      transform 0.25s ease-in-out,
      opacity 0.125s ease-in-out 0.0625s,
      visibility 0.125s ease-in-out 0.0625s;

    &.show-info {
      opacity: 1;
      filter: blur(0);
      transform: translateY(0);
      visibility: visible;
    }
  }

  .deploy-text {
    margin-top: 8px;
    padding: 8px;
    color: #d8d8d8;
    font-size: 0.75rem;
    border-radius: 8px;
    background-color: #3e4144;
    font-family: "Roboto Mono", monospace;

    & span {
      color: limegreen;
      font-weight: 600;
    }
  }
`;

function Index() {
  const [btnState, setbtnState] = useState<ButtonState>("failed");

  const handleBtnClick = () => {
    if (btnState === "failed") setbtnState("redeploy");
    if (btnState === "redeploy") setbtnState("success");
    if (btnState === "success") setbtnState("closed");
    // if (btnState === "closed") setbtnState("failed");
  };

  const isSuccess = btnState === "success";

  return (
    <IndexPageStyles>
      <Container className={`${isSuccess ? "hide-radius" : ""}`}>
        <div className={`deploy-info${isSuccess ? " show-info" : ""}`}>
          <FlexibleDiv $justifyContent="space-between">
            <span className="commit">Branch toolbar-v2</span>
            <span className="commit" style={{ color: "#d8d8d8" }}>
              2s ago
            </span>
          </FlexibleDiv>
          <p className="deploy-text">
            Deployed on <span>landing-page</span> Preview environment
          </p>
        </div>
        <FlexibleDiv
          className={`footer ${btnState}`}
          $p="8px"
          $flexGap="12px"
          $alignItems="center"
          $justifyContent="center"
        >
          <span className="commit">2e860de</span>
          <FlexibleDiv
            $flexGap="12px"
            $alignItems="center"
            className={`status${
              btnState === "failed" || btnState === "closed"
                ? ""
                : " show-status"
            }`}
          >
            {(btnState === "redeploy" || btnState === "success") && (
              <span className="dot"></span>
            )}
            {(btnState === "redeploy" || btnState === "success") && (
              <span>
                {btnState === "redeploy" && "Failed to Compile"}
                {btnState === "success" && "Successfully Deployed"}
              </span>
            )}
          </FlexibleDiv>
          <Button className={btnState} onClick={handleBtnClick}>
            {btnState === "failed" && "Failed"}
            {btnState === "redeploy" && "Redeploy"}
            {btnState === "success" && "Close"}
            {btnState === "closed" && "Details"}
          </Button>
        </FlexibleDiv>
      </Container>
    </IndexPageStyles>
  );
}
