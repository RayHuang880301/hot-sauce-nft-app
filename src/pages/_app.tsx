import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import {
	getDefaultWallets,
	RainbowKitProvider,
	darkTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, goerli, WagmiConfig } from "wagmi";
import { mainnet } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { APP_ALCHEMY_ID } from "../config";
import theme from "../styles/theme";

const { chains, provider } = configureChains(
	[mainnet, goerli],
	[alchemyProvider({ apiKey: APP_ALCHEMY_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
	appName: "My RainbowKit App",
	chains,
});

const wagmiClient = createClient({
	autoConnect: false,
	connectors,
	provider,
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<WagmiConfig client={wagmiClient}>
				<RainbowKitProvider
					chains={chains}
					theme={darkTheme({
						accentColor: "#C80000",
					})}
				>
					<Component {...pageProps} />
				</RainbowKitProvider>
			</WagmiConfig>
		</ChakraProvider>
	);
}