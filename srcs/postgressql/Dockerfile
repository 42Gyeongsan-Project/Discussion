# PostgreSQL 공식 이미지 사용
FROM postgres:15

# 환경 변수 설정 (PostgreSQL 기본 사용자, 데이터베이스 등)
ENV POSTGRES_USER=root
ENV POSTGRES_PASSWORD=root
ENV POSTGRES_DB=ping_pong

# 포트 공개 (PostgreSQL 기본 포트 5432)
EXPOSE 5432

# PostgreSQL 실행 명령 (포그라운드)
CMD ["postgres"]
