#### 1. 301, 303 요청을 하였을 때, 왜 httpstat.us 페이지의 메인으로 redirect될까?
- 301과 303은 각각 'moved permanently', 'see other' 상태이고, 요청한 리소스가 다른 위치로 이동했음을 알리는 코드이다.
- 따라서 새로운 위치로 자동 리다이렉트 되며, 그 위치가 httpstat.us 의 메인 페이지인 것이다.
#### 2. 401 요청을 하였을 때, 네트워크 탭의 상태를 보고 어떻게 인증해야 하는지 www-Authenticate 헤더를 기반으로 설명해보자.
- 서버가 사용자에게 인증요구를 보내고, 401 응답과 함께 www-Authenticate 헤더를 기술해 어디서 어떻게 인증할 지 설명한다.
- 클라이언트가 서버로 인증하며, 인코딩된 비밀번호와 그 외 인증 파라미터들을 헤더에 담아서 요청한다.
- 성공적으로 완료되면 정상적인 상태 코드를 반환한다.
#### 3. Google에 "Hello"를 입력하여 결과물을 보고, 네트워크 요청 탭에서 캐시 관련 정보가 어디에 저장되어 있는지 분석하여 보자.
- 응답헤더에 저장되어있다.
#### 4. 더 알고 싶은 상태코드를 직Google에 "Hello"를 입력하여 결과물을 보고, 네트워크 요청 탭에서 캐시 관련 정보가 어디에 저장되어 있는지 분석하여 보자. 직접 체험해보고, 해당 상태코드에서 진행한 요청 헤더, 응답 헤더를 직접 정리하여 분석해보자.
- 429 too many requests
- 응답 : length - 21, type - text/plain, server - Kestrel
- 요청 : encoding - gzip, dflate, br, zstd, cache-control - max-age=0 host, cookie, referer, etc.