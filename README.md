# 프로젝트명

Indicamp

## Getting Started

### Installation

1. Indicamp Project 초기 셋업

```bash
# 프로젝트 레파지토리 클론 받기
git clone https://github.com/indiflex/indicamp.git

# 프로젝트 디렉토리로 이동
cd indicamp

# 브랜치 목록 확인
git branch -a

# develop 브랜치로 전환
git checkout develop

# 원본 레포지토리를 upstream에 추가
git remote add upstream https://github.com/indiflex/indicamp.git

# 리모트 설정 확인
git remote -vv

# upstream에서 최신 내용 가져오기
git fetch upstream

# 프로젝트 의존성 설치
pnpm i
```

- 아래 작업이 완료되시면, 브랜치 따서 각 페이지 및 기능 개발 작업하시면 됩니다.

<br />
cf. git branch -a 명령어 입력 시, 아래와 같이 나오면 프로젝트 셋업이 성공적으로 진행된 것입니다.

```bash
* develop
master
remotes/origin/HEAD -> origin/master
remotes/origin/develop
remotes/upstream/develop
remotes/upstream/master
```

<br />
2. 본인이 작업 중인 feature 브랜치 작업 완료 시

```bash
# upstream의 최신 변경사항 가져오기
git fetch upstream

# upstream/develop의 변경사항을 현재 브랜치에 rebase
git rebase upstream/develop

# 의존성 패키지 동기화
pnpm i
```

- 위 작업이 완료되면 push 및 PR 날려주시면 됩니다.
