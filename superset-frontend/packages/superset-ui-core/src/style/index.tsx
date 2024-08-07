/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import emotionStyled from '@emotion/styled';
import { useTheme as useThemeBasic } from '@emotion/react';
import createCache from '@emotion/cache';

export {
  css,
  keyframes,
  jsx,
  ThemeProvider,
  CacheProvider as EmotionCacheProvider,
  withTheme,
} from '@emotion/react';
export { default as createEmotionCache } from '@emotion/cache';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends SupersetTheme {}
}

export function useTheme() {
  const theme = useThemeBasic();
  // in the case there is no theme, useTheme returns an empty object
  if (Object.keys(theme).length === 0 && theme.constructor === Object) {
    throw new Error(
      'useTheme() could not find a ThemeContext. The <ThemeProvider/> component is likely missing from the app.',
    );
  }
  return theme;
}

export const emotionCache = createCache({
  key: 'superset',
});

export const styled = emotionStyled;

const defaultTheme = {
  borderRadius: 4,
  colors: {
    text: {
      label: '#879399',
      help: '#737373',
    },
    primary: {
      base: '#20A7C9',
      dark1: '#1A85A0',
      dark2: '#156378',
      light1: '#79CADE',
      light2: '#A5DAE9',
      light3: '#D2EDF4',
      light4: '#E9F6F9',
      light5: '#F3F8FA',
    },
    secondary: {
      base: '#444E7C',
      dark1: '#363E63',
      dark2: '#282E4A',
      dark3: '#1B1F31',
      light1: '#8E94B0',
      light2: '#B4B8CA',
      light3: '#D9DBE4',
      light4: '#ECEEF2',
      light5: '#F5F5F8',
    },
    grayscale: {
      base: '#666666',
      dark1: '#323232',
      dark2: '#000000',
      light1: '#B2B2B2',
      light2: '#E0E0E0',
      light3: '#F0F0F0',
      light4: '#F7F7F7',
      light5: '#FFFFFF',
    },
    error: {
      base: '#E04355',
      dark1: '#A7323F',
      dark2: '#6F212A',
      light1: '#EFA1AA',
      light2: '#FAEDEE',
    },
    warning: {
      base: '#FF7F44',
      dark1: '#BF5E33',
      dark2: '#7F3F21',
      light1: '#FEC0A1',
      light2: '#FFF2EC',
    },
    alert: {
      base: '#FCC700',
      dark1: '#BC9501',
      dark2: '#7D6300',
      light1: '#FDE380',
      light2: '#FEF9E6',
    },
    success: {
      base: '#5AC189',
      dark1: '#439066',
      dark2: '#2B6144',
      light1: '#ACE1C4',
      light2: '#EEF8F3',
    },
    info: {
      base: '#66BCFE',
      dark1: '#4D8CBE',
      dark2: '#315E7E',
      light1: '#B3DEFE',
      light2: '#EFF8FE',
    },
    lacuna1: {
      color: '#FF0000',
      label: '#FF0000 Vermelho'
    },
    lacuna2: {
      color: '#00FF00',
      label: '#00FF00 Verde'
    },
    lacuna3: {
      color: '#0000FF',
      label: '#0000FF Azul'
    },
    lacuna4: {
      color: '#FFFF00',
      label: '#FFFF00 Amarelo'
    },
    lacuna5: {
      color: '#FFA500',
      label: '#FFA500 Laranja'
    },
    lacuna6: {
      color: '#800080',
      label: '#800080 Roxo'
    },
    lacuna7: {
      color: '#FFC0CB',
      label: '#FFC0CB Rosa'
    },
    lacuna8: {
      color: '#8B4513',
      label: '#8B4513 Marrom'
    },
    lacuna9: {
      color: '#808080',
      label: '#808080 Cinza'
    },
    lacuna10: {
      color: '#000000',
      label: '#000000 Preto'
    },
    lacuna11: {
      color: '#FFFFFF',
      label: '#FFFFFF Branco'
    },
    lacuna12: {
      color: '#40E0D0',
      label: '#40E0D0 Turquesa'
    },
    lacuna13: {
      color: '#FFD700',
      label: '#FFD700 Dourado'
    },
    lacuna14: {
      color: '#C0C0C0',
      label: '#C0C0C0 Cinza Claro'
    },
    lacuna15: {
      color: '#800000',
      label: '#800000 Vermelho Escuro'
    },
    lacuna16: {
      color: '#32CD32',
      label: '#32CD32 Verde Lima'
    },
    lacuna17: {
      color: '#000080',
      label: '#000080 Azul Marinho'
    },
    lacuna18: {
      color: '#FF7F50',
      label: '#FF7F50 Coral'
    },
    lacuna19: {
      color: '#FA8072',
      label: '#FA8072 Salmão'
    },
    lacuna20: {
      color: '#E6E6FA',
      label: '#E6E6FA Lavanda'
    },
  },
  opacity: {
    light: '10%',
    mediumLight: '35%',
    mediumHeavy: '60%',
    heavy: '80%',
  },
  typography: {
    families: {
      sansSerif: `'Inter', Helvetica, Arial`,
      serif: `Georgia, 'Times New Roman', Times, serif`,
      monospace: `'Fira Code', 'Courier New', monospace`,
    },
    weights: {
      light: 200,
      normal: 400,
      medium: 500,
      bold: 600,
    },
    sizes: {
      xxs: 9,
      xs: 10,
      s: 12,
      m: 14,
      l: 16,
      xl: 21,
      xxl: 28,
    },
  },
  zIndex: {
    aboveDashboardCharts: 10,
    dropdown: 11,
    max: 3000,
  },
  transitionTiming: 0.3,
  gridUnit: 4,
  brandIconMaxWidth: 37,
};

export type SupersetTheme = typeof defaultTheme;

export interface SupersetThemeProps {
  theme: SupersetTheme;
}

export const supersetTheme = defaultTheme;
