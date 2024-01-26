interface Config {
    bannerImage: string;
    backgroundColour: string;
    primaryColour: string;
    primaryColourHover: string;
    navBackgroundColour: string;
}

interface ConfigState {
    config: Config[];
  }

export type { Config, ConfigState }