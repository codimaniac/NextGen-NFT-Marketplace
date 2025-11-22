import { useState } from "react";
import {
  SiBinance,
  SiBitcoin,
  SiCardano,
  SiEthereum,
  SiPolygon,
  SiSolana,
} from "react-icons/si";

const WalletConnectCard = ({ wallet, wallet_icon }) => {
  const [ isVisible, setIsVisible ] = useState(false)
  const Icon = wallet_icon;

  return (
    <div onClick={() => setIsVisible(!isVisible)} className="flex flex-col items-center justify-center gap-4 p-8 bg-[#16192a] border-2 border-[#2e3150] cursor-pointer activate-hover">
      <Icon
        size={48}
        className="text-[var(--secondary-color)] text-7xl animate-soft-bounce"
      />
      <h2 className="font-bold">{wallet}</h2>
      <p className="text-xs font-light leading-[183%] text-center">
        Connect your {wallet} wallet
      </p>
      {/* {
        isVisible && <div className="fixed flex items-center justify-center top-0 left-0 w-full h-screen bg-[#d6d6d63c] cursor-default">
            <div className="w-80 h-screen">
                Hello World
            </div>
        </div>
      } */}
    </div>
  );
};

const ConnectWallet = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12 section__margin">
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-3xl font-extrabold lg:text-4xl mt-8">
          Connect Your Wallet
        </h1>
        <p className="text-xs font-light leading-[183%] mt-4 w-1/2 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, odio
          laboriosam saepe deserunt corporis velit, beatae consequuntur
          perferendis, eveniet delectus ipsa quia earum excepturi eos
          exercitationem facere. Alias, corporis sed?
        </p>
      </div>
      <div className="grid grid-cols-3 gap-2 w-full">
        <WalletConnectCard wallet="Bitcoin" wallet_icon={SiBitcoin} />
        <WalletConnectCard wallet="Binance" wallet_icon={SiBinance} />
        <WalletConnectCard wallet="Polygon" wallet_icon={SiPolygon} />
        <WalletConnectCard wallet="Solana" wallet_icon={SiSolana} />
        <WalletConnectCard wallet="Cardano" wallet_icon={SiCardano} />
        <WalletConnectCard wallet="Ethereum" wallet_icon={SiEthereum} />
      </div>
    </div>
  );
};

export default ConnectWallet;
