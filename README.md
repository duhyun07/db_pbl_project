# db_pbl_project · Ubuntu 보안 취약점·패치 관리 DB 시스템

데이터베이스 수업 PBL 2조 프로젝트 저장소입니다. (최종 발표 2026.12.2)

->> [팀 작업 사이트 바로 가기](https://duhyun07.github.io/db_pbl_project/)

## 프로젝트 소개

Ubuntu 24.04 서버에 설치된 Apache HTTP Server, OpenSSH의 보안 취약점(CVE)과 위험도(CVSS),
Ubuntu 패키지별 수정 상태를 관계형 데이터베이스로 관리하고,
서버별로 누가·언제까지·어떤 상태로 조치하고 있는지 SQL로 추적·분석하는 시스템입니다.

CVE·패치 정보는 NVD와 Ubuntu 공식 자료에서 수집한 실제 데이터를,
서버·담당자·조치 이력은 시연용 가상 데이터를 사용합니다.

## 주요 내용

- 정규화된 스키마와 PK·FK·UNIQUE·CHECK 제약조건, 트리거·뷰
- 공식 자료(NVD, Ubuntu CVE/USN) 수집 → 정형화 → 적재
- JOIN·집계·서브쿼리를 활용한 미해결·고위험·기한 초과 분석
- 인덱스 전후 실행 계획(EXPLAIN) 비교를 통한 쿼리 효율성 분석
- Streamlit 관리 프로그램 (+ LLM 자연어 질의)

## 팀원과 역할

| 역할 | 담당 |
|---|---|
| ① DB 설계·구축 (팀장) | 고두현 |
| ② SQL 분석·성능 | 두희 |
| ③ Python 프로그램 | 예경 |
| ④ 데이터 수집·정리 | 동림 |

역할별 할 일, 일정, GitHub 작업 방법, 단계별 채점 문제(`problems/`)는 팀 작업 사이트에서 확인할 수 있습니다.

코드는 [vuln-mgmt](https://github.com/duhyun07/vuln-mgmt) 레포에 있고, 이 레포는 사이트만 관리합니다.
