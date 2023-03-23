import React, { useEffect, useMemo, useState } from "react";
import styles from "./Mint.module.scss";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  Input,
  Spacer,
  Spinner,
  useNumberInput,
  useToast,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import nftImg from "../../assets/nft.gif";
import { BigNumber, utils } from "ethers";
import CONTRACT_ABI from "../../abi/abi.json";
import { CONTRACT_ADDR, MINT_ID } from "../../config";
import {
  useAccount,
  useContract,
  useContractRead,
  useContractWrite,
  useSigner,
} from "wagmi";
import { useQuery } from "@tanstack/react-query";
import i18n from '../../i18n/i18n';

export default function Mint() {
  const { t } = i18n;
  const price = utils.parseEther("0.05");
  const toast = useToast();
  const { address, isConnected } = useAccount();
  const { data: signer } = useSigner();
  const [isLoading, setIsLoading] = useState(false);
  const contract = useContract({
    address: CONTRACT_ADDR,
    abi: CONTRACT_ABI,
    signerOrProvider: signer,
  });

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 10,
      precision: 0,
    });
  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();
  const totalPrice = useMemo(() => {
    return BigNumber.from(price).mul(Number(input.value));
  }, [input.value]);

  const { data: totalSupply, refetch } = useContractRead({
    address: CONTRACT_ADDR,
    abi: CONTRACT_ABI,
    functionName: "totalSupply",
    args: [MINT_ID],
    enabled: !!signer,
  });

  // const { writeAsync, isSuccess } = useContractWrite({
  //   mode: "recklesslyUnprepared",
  //   address: CONTRACT_ADDR,
  //   abi: CONTRACT_ABI,
  //   functionName: "publicMint",
  //   args: [address, MINT_ID, input.value],
  //   overrides: {
  //     value: totalPrice,
  //   },
  // });

  // useEffect(() => {
  //   if (isSuccess) {
  //     setIsLoading(false);
  //     refetch();
  //     toast({
  //       title: "Mint successfully",
  //       status: "success",
  //       duration: 5000,
  //       position: "top",
  //       isClosable: true,
  //     });
  //   }
  // }, [isSuccess]);

  const handleMint = async () => {
    if (signer === null) {
      toast({
        title: "Please connect your wallet",
        status: "error",
        duration: 5000,
        position: "top",
        isClosable: true,
      });
    } else {
      setIsLoading(true);
      try {
        const tx = await contract?.publicMint(address, MINT_ID, input.value, {
          value: totalPrice,
        });
        await tx.wait();
        setIsLoading(false);
        refetch();
        toast({
          title: "Mint successfully",
          status: "success",
          duration: 5000,
          position: "top",
          isClosable: true,
        });
      } catch (error) {
        setIsLoading(false);
        toast({
          title: "Mint failed",
          description: "Please try again later",
          status: "error",
          duration: 5000,
          position: "top",
          isClosable: true,
        });
      }
    }
  };

  return (
    <div id="mint" className={styles.section}>
      <div></div>
      <div className={styles.container}>
        <Image
          className={styles.img}
          src={nftImg.src}
          width="400px"
          alt="nftImg"
          transition={"all 0.2s ease-in-out"}
          _hover={{
            transform: "scale(1.05)",
          }}
        />
        <div className={styles.Box}>
          <h1>{t('How do I purchase a HOT SAUCE NFT?')}</h1>
          <p>
            {t('HOT SAUCE NFTs are only available to mint at *website*. After minting, owners can list their NFT for resale secondary marketplace (Opensea).')}
            <br />
            <br />
            {t('Each limited edition NFT can be minted until it is sold out. Then the next limited edition NFT will be available for minting. Owners of all 7 NFTs will be airdropped a unique interactive NFT.')}
            <br />
            <br />
            {t('Users can pay with ETH. The price to mint is 0.05 ETH')}
          </p>
          <Flex lineHeight={"2rem"}>
            <Box fontSize={"4xl"} fontWeight={"bold"} color={"#fff"} my="2">
              Total:{" "}
              <span>{totalSupply ? 333 - Number(totalSupply) : "???"}</span>
              /333
            </Box>
            <Spacer />
            <Box fontSize={"3xl"} fontWeight={"bold"} color={"#fff"} my="2">
              {`${utils.formatEther(totalPrice)} ETH`}
            </Box>
          </Flex>
          <div className={styles.btnBox}>
            <Flex>
              <IconButton
                {...dec}
                aria-label="Minus mint number"
                bgColor="#C80000"
                border="1px solid #fff"
                borderRadius="lg"
                icon={<MinusIcon color={"#fff"} />}
                cursor={"pointer"}
                transition="all 0.2s ease-in-out"
                _hover={{ transform: "scale(1.1)" }}
                _active={{ transform: "scale(0.9)" }}
              />
              <Input
                {...input}
                textColor="#fff"
                bgColor="#C80000"
                border="1px solid #fff"
                borderRadius="lg"
                mx="4"
                maxW={20}
                textAlign="center"
                type="number"
                value={input.value}
              />
              <IconButton
                {...inc}
                aria-label="Add mint number"
                bgColor="#C80000"
                border="1px solid #fff"
                borderRadius="lg"
                icon={<AddIcon color={"#fff"} />}
                cursor={"pointer"}
                transition="all 0.2s ease-in-out"
                _hover={{ transform: "scale(1.1)" }}
                _active={{ transform: "scale(0.9)" }}
              />
            </Flex>
            <Button
              className={styles.btn}
              transition="all 0.2s ease-in-out"
              cursor={"pointer"}
              _hover={{ transform: "scale(1.1)" }}
              _active={{ transform: "scale(0.9)" }}
              onClick={() => handleMint()}
            >
              {isLoading ? <Spinner /> : "Mint"}
            </Button>
            {/* <Button className={styles.btn}>Mint by VISA</Button> */}
          </div>
        </div>
      </div>
      <div className={styles.marquee}>
        <div>
          <span>Hot Sauce NFT</span>
          <span>Hot Sauce NFT</span>
          <span>Hot Sauce NFT</span>
          <span>Hot Sauce NFT</span>
          <span>Hot Sauce NFT</span>
          <span>Hot Sauce NFT</span>
          <span>Hot Sauce NFT</span>
          <span>Hot Sauce NFT</span>
          <span>Hot Sauce NFT</span>
          <span>Hot Sauce NFT</span>
          <span>Hot Sauce NFT</span>
        </div>
      </div>
    </div>
  );
}
