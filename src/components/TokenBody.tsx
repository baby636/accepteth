import React from "react";
import QRCode from "qrcode.react";
import { HiLockClosed } from "react-icons/hi";
import styled from "styled-components";
import { TextDisplayWithCopyButton } from "./TextDisplayWithCopyButton";
import { AllValidTokens } from "../utils/images";

const ValidateAddressLink = styled.a`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center; // vertical center
  justify-content: center; // horizontal center
  padding: 20px 30px;
  font-weight: bold;
  background-image: linear-gradient(to right, #69e495, #0eb8c5);
  border-radius: 0px 0px 6px 6px;
`;

const QRContainer = styled.div`
  margin-top: 30px;
  text-align: center;
`;

const Or = styled.div`
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const buildBlockExplorerUrl = (token: AllValidTokens, address: string) => {
  switch (token) {
    case "Ethereum":
    case "0x":
      return `https://etherscan.io/address/${address}`;
    case "Bitcoin":
      return `https://www.blockchain.com/btc/address/${address}`;
    case "Bitcoin Cash":
      return `https://www.blockchain.com/bch/address/${address}`;
    case "Ethereum Classic":
      return `https://blockscout.com/etc/mainnet/address/${address}`;
    case "Litecoin":
      return `https://blockchair.com/litecoin/address/${address}`;
    default:
      return "";
  }
};
const Body = styled.div`
  padding: 50px 30px 50px 30px; ;
`;
export const TokenBody = ({
  token,
  address,
}: {
  token: AllValidTokens;
  address: string;
}) => {
  return (
    <div>
      <Body>
        <div style={{ fontWeight: "bold", paddingBottom: "10px" }}>
          Send {token} to:{" "}
        </div>
        <TextDisplayWithCopyButton text={address} />
        <Or>or</Or>
        Scan Here:
        <QRContainer>
          <QRCode value={address} size={180} />
        </QRContainer>
      </Body>
      {
        <ValidateAddressLink
          href={buildBlockExplorerUrl(token, address)}
          target="_blank"
        >
          <HiLockClosed
            color="white"
            size="22"
            style={{ marginRight: "6px" }}
          />
          Validate address
        </ValidateAddressLink>
      }
    </div>
  );
};
