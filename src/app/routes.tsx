import { createBrowserRouter } from "react-router";
import PersonalWorkspace from "../imports/PersonalWorkspace";
import Entrance12WebMembershipCenter from "../imports/Entrance12WebMembershipCenter";
import PlanSelection from "./components/PlanSelection";
import NamingPage from "./components/NamingPage";
import SelectSeatsPage from "./components/SelectSeatsPage";
import StripeCheckoutPage from "./components/StripeCheckoutPage";
import PaymentSuccessPage from "./components/PaymentSuccessPage";
import InvitePage from "./components/InvitePage";
import WelcomePage from "./components/WelcomePage";
import TeamWorkspacePage from "./components/TeamWorkspacePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: PersonalWorkspace,
  },
  {
    path: "/membership-center",
    Component: Entrance12WebMembershipCenter,
  },
  {
    path: "/plan-selection",
    Component: PlanSelection,
  },
  {
    path: "/create-workspace",
    Component: NamingPage,
  },
  {
    path: "/create-workspace/select-seats",
    Component: SelectSeatsPage,
  },
  {
    path: "/checkout",
    Component: StripeCheckoutPage,
  },
  {
    path: "/payment-success",
    Component: PaymentSuccessPage,
  },
  {
    path: "/invite",
    Component: InvitePage,
  },
  {
    path: "/welcome",
    Component: WelcomePage,
  },
  {
    path: "/home-team",
    Component: TeamWorkspacePage,
  },
]);