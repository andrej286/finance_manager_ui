import Home from "./pages/home";
import {GoalsScreen} from "./pages/goals-screen";
import StartScreen from "./pages/start-screen";
import {CostsScreen} from "./pages/costs-screen";
import {IncomesScreen} from "./pages/incomes-screen";
import {AssetsScreen} from "./pages/assets-screen";
import {Earnings} from "./pages/calculators/earnings/earnings";

export const START_PAGE = {
  component: <StartScreen />,
  path: '/'
}
export const HOME_PAGE = {
  component: <Home />,
  path: '/home'
}
export const GOALS_PAGE = {
  component: <GoalsScreen />,
  path: '/goals'
}
export const COSTS_PAGE = {
  component: <CostsScreen />,
  path: '/costs'
}
export const INCOMES_PAGE = {
  component: <IncomesScreen />,
  path: '/incomes'
}
export const ASSETS_PAGE = {
  component: <AssetsScreen />,
  path: '/assets'
}
export const EARNINGS_PAGE = {
  component: <Earnings />,
  path: '/earnings'
}

export const ALL_PAGES = [
  START_PAGE,
  HOME_PAGE,
  GOALS_PAGE,
  COSTS_PAGE,
  INCOMES_PAGE,
  ASSETS_PAGE,
  EARNINGS_PAGE,
]
