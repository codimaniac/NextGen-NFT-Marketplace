import { lazy } from "react"

export { default as Homepage } from './Homepage'
export const Signup = lazy(() => import('./Signup'))
export const Login = lazy(() => import('./Login'))
export const About = lazy(() => import('./About'))
export const ContactUs = lazy(() => import('./ContactUs'))
export const NotFound = lazy(() => import('./NotFound'))
export const Blog = lazy(() => import('./Blog'))
export const FAQ = lazy(() => import('./FAQ'))
export const Collectibles = lazy(() => import('./Collectibles'))
export const TopCreators = lazy(() => import('./TopCreators'))
export const Marketplace = lazy(() => import('./Marketplace'))
export const NFTDetail = lazy(() => import('./NFTDetail'))
export const CreatorProfile = lazy(() => import('./CreatorProfile'))
export const CreateNFT = lazy(() => import('./CreateNFT'))
export const ConnectWallet = lazy(() => import('./ConnectWallet'))