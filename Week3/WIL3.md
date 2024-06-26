#### HTML 메소드 예시들
- [GET](https://github.com/daenykevin/2024-1-Web-Study/blob/main/Week3/GET.png)
- [POST](https://github.com/daenykevin/2024-1-Web-Study/blob/main/Week3/POST.png)


#### HTTP/1.1,HTTP/2,HTTP/3 사이의 차이
- HTTP/1 은 한 연결당 하나의 요청을 처리하도록 설계되었다.
- 서버에 요청 시 매번 연결과 해제의 과정을 반복해야 했기에 RTT가 오래 걸린다.
- HTTP/1.1 에서는 Persistent Connection을 추가해 매번 연결을 하는 것이 아닌 TCP를 한 번 초기화하고 keep-alive 옵션을 통해 일정시간 동안 연결상태를 유지한다.
- Pipelining 추가를 통해 요청 후 응답을 기다리지 않고 요청을 순차적으로 전송해 들어온 순서대로 응답하는 방식을 사용했다.
- 하지만 앞의 요청이 지연되면 그 뒤의 요청이 blocking 된다는 단점이 있고, 연속된 요청 간의 헤더의 많은 중복도 생긴다.
- HTTP/2 는 멀티플렉싱을 사용해, 각 요청을 여러개의 stream에 나누어 보냄으로써 blocking을 방지했다.
- 요청과 응답 헤더의 메타데이터를 압축해, 연속된 요청에서의 중복 헤더로 인한 오버 헤드 문제도 해결했다.
- 클라이언트에게 필요한 리소스를 서버가 push해주는 기능이 있다.
- 서로 다른 stream이 전송 되고 있을 때, 하나의 stream에서 문제가 발생하면 다른 stream에서 지연이 일어나는 현상이 여전했다.
- HTTP/3 는 이전 버전과는 달리 QUIC 계층에서 돌아가며, UDP를 기반으로 한다.
- HTTP/2의 장점을 가지고, 초기 연결 설정 시 지연 시간이 감소되는 특징이 있다.
- 각 stream당 독립된 chain을 구성하여 blocking 문제를 해결했다.
