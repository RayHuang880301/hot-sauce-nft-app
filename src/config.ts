import { goerli } from "wagmi";
export const APP_ALCHEMY_ID = getString(process.env.NEXT_PUBLIC_ALCHEMY_ID);
export const VALID_CHAIN = goerli;
export const MINT_ID = 1;

export const CONTRACT_ADDR = getString(
  process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
  "0x1786a9654BE0A4277E521C4BBBc5171b5041306b"
);

function getString(value: any, defaultValue?: string) {
  if (typeof value === "string") return value;
  if (defaultValue !== undefined) return defaultValue;
  throw new Error(`Missing environment variable`);
}
