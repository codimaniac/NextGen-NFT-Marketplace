import { Routes, Route } from "react-router-dom";
import {
  About,
  Blog,
  ContactUs,
  CreatorProfile,
  Marketplace,
  FAQ,
  Homepage,
  Login,
  NotFound,
  Signup,
  TopCreators,
  NFTDetail,
  Collectibles,
  CreateNFT,
  ConnectWallet,
} from "./pages";
import { Layout } from "./containers";
import { Suspense } from "react";
import { LoadingState } from "./components";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Suspense fallback={<LoadingState />}><Login /></Suspense>} />
        <Route path="/signup" element={<Suspense fallback={<LoadingState />}><Signup /></Suspense>} />
        <Route path="/about" element={<Suspense fallback={<LoadingState />}><About /></Suspense>} />
        <Route path="/support" element={<Suspense fallback={<LoadingState />}><ContactUs /></Suspense>} />
        <Route path="/blog" element={<Suspense fallback={<LoadingState />}><Blog /></Suspense>} />
        <Route path="/top-creators" element={<Suspense fallback={<LoadingState />}><TopCreators /></Suspense>} />
        <Route path="/collectibles" element={<Suspense fallback={<LoadingState />}><Collectibles /></Suspense>} />
        <Route path="/marketplace/*" element={<Suspense fallback={<LoadingState />}><Marketplace /></Suspense>} />
        <Route path="/nft/:id/*" element={<Suspense fallback={<LoadingState />}><NFTDetail /></Suspense>} />
        <Route path="/creator-profile/:id/*" element={<Suspense fallback={<LoadingState />}><CreatorProfile /></Suspense>} />
        <Route path="/create-item" element={<Suspense fallback={<LoadingState />}><CreateNFT /></Suspense>} />
        <Route path="/connect-wallet" element={<Suspense fallback={<LoadingState />}><ConnectWallet /></Suspense>} />
        <Route path="/faq" element={<Suspense fallback={<LoadingState />}><FAQ /></Suspense>} />
        <Route path="*" element={<Suspense fallback={<LoadingState />}><NotFound /></Suspense>} />
      </Route>
    </Routes>
  );
}

export default App;
