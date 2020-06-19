/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

/*
- IOS
    - Emulador ⇒ pode utilizar [**localhost**](http://localhost) para chamar a API
    - Device fisico ⇒ precisa utilizar o IP da máquina onde está rodando o backend
- Android
    - Emulador (Android Studio) ⇒ rodar o "adb reverse tcp:3333 tcp:3333" (este comando redireciona a porta 3333 da máquina host para o emulador) aí pode utilizar o **localhost**
    - Emulador (Android Studio) ⇒ sem utilizar o adb utilizar o IP 10.0.0.2
    - Emulador (Genymotion) ⇒ utilizar o IP 10.0.3.2
    - Device Físico ⇒ utilizar o IP da máquina que está rodando o backend.

- Para listar os emuladores locais
  emulator -list-avds

- Para iniciar um emulador
  emulator -avd avd_name
  ou
  emulator @avd_name
*/