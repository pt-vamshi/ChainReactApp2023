import { ExpoConfig, ConfigContext } from "@expo/config"
import { version } from "./package.json"

const BUILD_NUMBER = 10

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "vamshi-pt",
  slug: "test",
  scheme: "chainreactapp",
  version,
  orientation: "portrait",
  icon: "./assets/images/app-icon-all.png",
  splash: {
    image: "./assets/images/splash-logo-all.png",
    resizeMode: "contain",
    backgroundColor: "#081828",
  },
  updates: {
    checkAutomatically: "ON_ERROR_RECOVERY",
    enabled: true,
    fallbackToCacheTimeout: 0,
    url: "https://u.expo.dev/b72c79d7-7c87-4aa7-b964-998dcff69e07",
  },
  runtimeVersion: {
    policy: "sdkVersion",
  },
  jsEngine: "hermes",
  assetBundlePatterns: ["**/*"],
  android: {
    icon: "./assets/images/app-icon-android-legacy.png",
    package: "com.chainreactapp",
    versionCode: BUILD_NUMBER,
    adaptiveIcon: {
      foregroundImage: "./assets/images/app-icon-android-adaptive-foreground.png",
      backgroundImage: "./assets/images/app-icon-android-adaptive-background.png",
    },
    splash: {
      image: "./assets/images/splash-logo-android-universal.png",
      resizeMode: "contain",
      backgroundColor: "#081828",
    },
    googleServicesFile: `./google-services.json`,
    intentFilters: [
      {
        action: "VIEW",
        data: { scheme: "https" },
      },
      {
        action: "VIEW",
        data: { scheme: "google.navigation" },
      },
      {
        action: "VIEW",
        data: { scheme: "geo" },
      },
      {
        action: "SEND",
        data: { scheme: "mailto" },
      },
    ],
  },
  ios: {
    icon: "./assets/images/app-icon-ios.png",
    supportsTablet: false,
    bundleIdentifier: "infinitered.stage.ChainReactConf",
    buildNumber: String(BUILD_NUMBER),
    splash: {
      image: "./assets/images/splash-logo-ios-mobile.png",
      tabletImage: "./assets/images/splash-logo-ios-tablet.png",
      resizeMode: "contain",
      backgroundColor: "#081828",
    },
    googleServicesFile: `./GoogleService-Info.plist`,
    infoPlist: {
      UIBackgroundModes: ["fetch", "remote-notification"],
      UIStatusBarHidden: true,
    },
  },
  web: {
    favicon: "./assets/images/app-icon-web-favicon.png",
    splash: {
      image: "./assets/images/splash-logo-web.png",
      resizeMode: "contain",
      backgroundColor: "#081828",
    },
  },
  owner: "vamshi-pt",
  extra: {
    eas: {
      projectId: "3c2e0d6c-71e9-4f31-8658-724366f13cd2",
    },
  },
  plugins: [
    "@react-native-firebase/app",
    "@react-native-firebase/crashlytics",
    ["expo-build-properties", { ios: { useFrameworks: "static" } }],
    ["expo-updates", { username: "vamshi-pt" }],
    ["expo-localization"],
    [
      "expo-build-properties",
      {
        android: {
          enableProguardInReleaseBuilds: true,
          enableShrinkResourcesInReleaseBuilds: true,
        },
      },
    ],
  ],
})
