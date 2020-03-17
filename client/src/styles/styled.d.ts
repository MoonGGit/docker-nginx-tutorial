import 'styled-components';

/**
 * 기존에 styled-components 라이브러리 추가 후에 Theme 을 활용하기 위해 따로
 * styled-components.ts 파일을 만들어서 선언을 해주었어야 했는데
 * @types/styled-components 가 추가된 이후로는 그럴 필요가 없고
 * 직접 추가를 해주면 되는 것 같다. React Native에서는 이전 방식대로 해주어야 하는 것 같으니 참고하자.
 * 참고 : https://styled-components.com/docs/api#typescript
 */
declare module 'styled-components' {
    export interface DefaultTheme {
        test: string;
    }
}
